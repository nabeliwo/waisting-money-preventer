import { css } from '@linaria/core'

export const globals = css`
  :global() {
    body {
      overflow-wrap: break-word;
      font-family: system-ui, sans-serif;
    }
    a {
      color: inherit;
    }
    img {
      vertical-align: middle;
    }
    input,
    button,
    textarea {
      margin: 0;
      padding: 0;
      border: none;
      background-color: inherit;
      color: inherit;
    }
    button,
    input,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
    }
  }
`
