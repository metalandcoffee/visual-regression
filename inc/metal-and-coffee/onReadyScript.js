module.exports = async (page, scenario, vp) => {
    // Remove an element from the page
    await page.$eval('#main-carousel-slider', e => e.parentNode.removeChild(e));
}