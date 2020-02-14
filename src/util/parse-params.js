export default function parseParams(hash = '') {
    if (hash[0] !== '#') {
        return {};
    }
    hash = hash.substring(1);
    if (!hash) {
        return {};
    }

    const spl = hash.split('&');
    const obj = {};
    for (let i = 0; i < spl.length; ++i) {
        const [key, value] = spl[i].split('=');
        if (!key || !value) {
            continue;
        }
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }

    return obj;
}