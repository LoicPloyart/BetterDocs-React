/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const posthog = require('posthog-js').default;

exports.onClientEntry = () => {
    posthog.init('phc_pPWZ6UyfpeNWDY7L7HDcDxq8wDCLF5K94C8vcFmXFWUB', {
        api_host: 'https://us.i.posthog.com',
        // Gatsby changes routes with pushState, so capture a $pageview on each history change
        capture_pageview: 'history_change',
        respect_dnt: true,
    });
};

exports.shouldUpdateScroll = args => {
    return false;
};
