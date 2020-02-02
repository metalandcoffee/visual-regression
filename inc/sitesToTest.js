module.exports = {
    "return-to-pantheon-test": {
        label: "Return to Pantheon Test",
        productionBaseUrl: "https://live-return-to-pantheon-test.pantheonsite.io/",
        nonProductionBaseUrl: "https://test-return-to-pantheon-test.pantheonsite.io/",
        pathsToTest: [
            "/2018/04/",
            "/2018/04/04/hello-world/",
        ]
    },
    "metal-and-coffee": {
        label: "Metal and Coffee Blog",
        productionBaseUrl: "https://metalandcoffee.com/",
        nonProductionBaseUrl: "https://metalandcoffee.com/",
        pathsToTest: [
            "/",
        ]
    },
    "wordpress-at-scale": {
        label: "WordPress at Scale",
        productionBaseUrl: "https://scalewp.io/",
        nonProductionBaseUrl: "https://dev-wp-microsite.pantheonsite.io/",
        pathsToTest: [
            "/resources",
            "/elastic-architecture",
            "/page-caching",
            "/object-caching",
            "/query-performance",
            "/searching-for-scale",
            "/a-real-world-scalable-architecture",
            "/development-and-workflow",
        ]
    }
};
