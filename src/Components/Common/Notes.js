import React from "react";
import arrow from "../../Assets/Icons/icon-5.png";
import web from "../../Assets/Icons/icon-4.png";
import file from "../../Assets/Icons/icon-15.png";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";

const Notes = ({ attributes, setAttributes, from }) => {
  const { notes, selectedNote } = attributes;
  const selectedNoteInfo = notes[selectedNote];
  const { title, description, icon, type } = selectedNoteInfo;
  return (
    <div className={`note-cont ${type}`}>
      <div className="icon" dangerouslySetInnerHTML={{ __html: icon }}></div>
      

      {from === "server" ? (
        <>
          <RichText
            tagName="h3"
            placeholder={__("Title")}
            value={title}
            onChange={(value) =>
              setAttributes({
                notes: updateData(notes, value, selectedNote, "title"),
              })
            }
          />
          <RichText
            tagName="p"
            placeholder={__("Description...")}
            value={description}
            onChange={(value) =>
              setAttributes({
                notes: updateData(notes, value, selectedNote, "description"),
              })
            }
          />
        </>
      ) : (
        <>
          <RichText.Content tagName="h3" value={title} />
          <RichText.Content tagName="p" value={description} />
        </>
      )}
      {selectedNoteInfo.link ? (
        selectedNoteInfo.type === "information" ? (
          <a
            className="link info-link"
            href={selectedNoteInfo.link.url}
            target="blank"
          >
            <img src={web} alt="" />

            <span>{selectedNoteInfo.link?.text}</span>
            <img src={arrow} alt="" />
          </a>
        ) : (
          <a
            className="link file-link"
            download
            href={selectedNoteInfo.link.url}
            rel="noreferrer"
            target="_blank"
          >
            <img src={file} alt="" />
            <span>{selectedNoteInfo.link?.text}</span>
          </a>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Notes;
