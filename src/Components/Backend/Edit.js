import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Notes from "../Common/Notes";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const from = "server";
  

  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <Notes from={from} attributes={attributes} setAttributes={setAttributes}/>
      </div>
    </>
  );
};
export default Edit;
