const { height: pageHeaderHeight } = document.querySelector(".page-header").getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;

console.log("body padding-top = header height =", { height: pageHeaderHeight });
