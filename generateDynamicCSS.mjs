export const generateDynamicCSS = (cohortes) => {
  let css = `
    .amphi {
      display: grid;
      grid-template-columns: ${cohortes.map(cohorte => `1fr`).join(' ')};
      grid-auto-flow: row dense;
      grid-gap: 5px;
    }
  `;

  cohortes.forEach(cohorte => {
    css += `
      [data-cohorte="${cohorte}"] {
        grid-column: ${cohorte};
      }
    `;
  });

  css += `
    h1 {
      display: flex;
      place-content: center;
      border-bottom: 1px solid black;
      position: sticky;
      top: 0;
      background: white;
      z-index: 1000;
    }

    body,
    html {
      width: 100%;
      height: 100%;
    }
  `;

  return css;
};