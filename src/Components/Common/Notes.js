import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";
import { fileIcon, globIcon, rightArrow } from "../../utils/icons";


const Notes = ({ attributes, setAttributes, from }) => {
  const { notes, selectedNote } = attributes;
  const selectedNoteInfo = notes[selectedNote];
  const { title, description, icon, type } = selectedNoteInfo;
  
  return (
    <div className={`note-cont ${type}`}>
      <div className="icon" dangerouslySetInnerHTML={{ __html: icon }}></div>

      <div>
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
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </>
        )}
        {selectedNoteInfo.link ? (
          selectedNoteInfo.type === "information" ? (
            <a
              className="link info-link"
              href={selectedNoteInfo.link.url}
              target="blank"
            >
              <div
                className="linkIcon"
                dangerouslySetInnerHTML={{ __html: globIcon }}
              />
              <span>{selectedNoteInfo.link?.text}</span>
              <div
                className="linkIcon"
                dangerouslySetInnerHTML={{ __html: rightArrow }}
              />
            </a>
          ) : (
            <a
              className="link file-link"
              download
              href={selectedNoteInfo.link.url}
              rel="noreferrer"
              target="_blank"
            >
              <div
                className="linkIcon"
                dangerouslySetInnerHTML={{ __html: fileIcon }}
              />
              <span>{selectedNoteInfo.link?.text}</span>
            </a>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Notes;
