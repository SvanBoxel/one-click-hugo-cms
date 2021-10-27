import React from "react";
<<<<<<< HEAD
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";
=======
import CMS from "netlify-cms";
>>>>>>> f53574889f6352b6a60c79eccab163f751add0b3

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

<<<<<<< HEAD
CMS.registerPreviewStyle(styles, { raw: true });
=======

// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
>>>>>>> f53574889f6352b6a60c79eccab163f751add0b3
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
<<<<<<< HEAD
CMS.init();
=======
CMS.registerWidget("color", ColorControl);
>>>>>>> f53574889f6352b6a60c79eccab163f751add0b3
