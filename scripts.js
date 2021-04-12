// Get all replier's usernames except mine "blastbots".
// Tweeted a honeypot and captured all the replies that were posted in seconds.
// https://twitter.com/blastbots/status/1381583149453426692
[...document.getElementsByTagName('a')].filter(a => a.href.includes('/status/')).map(a=>a.href.split('/')[3]).filter(u=> u !== 'blastbots')