import config from '../config';

export default class TwitchService {
    static getUser(accessToken) {
        return fetch('https://api.twitch.tv/helix/users', this.getOptions(accessToken))
            .then((res) => res.json())
            .then((json) => json.data && json.data.length ? json.data[0] : null);
    }

    static getClips(accessToken, userId) {
        return fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${encodeURIComponent(userId)}`, this.getOptions(accessToken))
            .then((res) => res.json())
            .then((json) => json.data);
    }

    static getOptions(accessToken) {
        const headers = {};
        headers['Client-ID'] = config.clientId;
        headers['Authorization'] = `Bearer ${accessToken}`;
        headers['Accept'] = 'application/json';
        return { headers: headers };
    }
}