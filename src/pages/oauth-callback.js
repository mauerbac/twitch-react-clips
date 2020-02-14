import React from 'react';
import { Redirect } from 'react-router-dom';
import parseParams from '../util/parse-params';
import TwitchService from '../services/twitch';
import ClipsList from '../components/clips-list';

export default function OAuthCallback(props) {
    const [loading, setLoading] = React.useState(0);
    const [clips, setClips] = React.useState([]);
    const [error, setError] = React.useState('');
    const [invalid, setInvalid] = React.useState(false);

    React.useEffect(() => {
        const params = parseParams(props.location.hash);
        console.log(params);
        if (!params.access_token) {
            setInvalid(true);
            return;
        }

        setLoading((l) => l + 1);
        TwitchService.getUser(params.access_token)
            .then((user) => TwitchService.getClips(params.access_token, user.id))
            .then((clips) => {
                setLoading((l) => l - 1);
                setClips(clips);
            })
            .catch((e) => setError(e.toString()));
    }, []);

    if (invalid) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            {!!error && `Error occurred: ${error}`}
            {!!loading && 'Loading..'}
            {!loading && !!clips.length && <ClipsList clips={clips} />}
        </div>
    );
}