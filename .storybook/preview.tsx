import React from "react";
import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/blocks";
import "../dist/style.css";
import "./sb-styles.css";

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
