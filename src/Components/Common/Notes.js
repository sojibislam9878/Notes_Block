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
      <div className="icon">
        <img src={icon} alt="icon"></img>
        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path></svg> */}
      </div>
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
          <h3>{title}</h3>
          <p>{description}</p>
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
