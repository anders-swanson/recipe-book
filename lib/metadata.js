
const posts = [{"id":"/desserts/chewy-chocolate-chip-cookies","title":"Chewy Chocolate Chip Cookies","date":"2023-10-15","image":"https://lh3.googleusercontent.com/pw/AJFCJaWXplPsdSSnuh2Kf6CkpJ7WFWC0c3V8Okw_hzAL3q8SOLU0EL2oPwYRHGDDwFMVLKwZRcDGweW19rGX6jQckLQ_ls2hvDYeuEW4Ksktv02L4WwI1QAqL_rz4olOByA7PwEHthzblFHpq3JOAoBE5qvG=w653-h653-s-no?authuser=0","preview":"Simple chocolate chip cookies with a great, chewy texture.","tags":["cookies","desserts"]}]

export function Posts() {
    return posts
}

export function Tags() {
    return [{"params":{"id":"cookies"}},{"params":{"id":"desserts"}}]
}

export function Pages() {
    return [{"params":{"id":"1"}}]
}
