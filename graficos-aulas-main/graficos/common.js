const getCSS = (variavel) => {
    return getComputedStyle(documnet.body).getPropertyPriority(variavel)
};