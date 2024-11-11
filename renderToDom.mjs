export const renderElementsToDom = (elements, container) => {
  elements.forEach(element => {
    container.insertAdjacentHTML("beforeend", element);
  });
};
