import { __ } from "@wordpress/i18n";
import {
  __experimentalInputControl as InputControl,
  TextareaControl,
} from "@wordpress/components";
import { PanelBody, SelectControl } from "@wordpress/components";
import { notesTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { InlineMediaUpload } from "../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes }) => {
  const { selectedNote, notes } = attributes;

  // console.log(selectedNote);

  const selectedNoteInfo = notes[selectedNote];

  // console.log(selectedNoteInfo);

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Notes", "b-blocks")}
      initialOpen={true}
    >
      <SelectControl
        label={__("Type", "b-blocks")}
        labelPosition="left"
        value={selectedNote}
        options={notesTypeOptions}
        // onChange={(v) => console.log(v++)}
        onChange={(v) =>
          setAttributes({ selectedNote: updateData(selectedNote, v++) })
        }
      />
      <InputControl
        className="mt10"
        label={__("Title", "b-blocks")}
        placeholder="Title"
        value={selectedNoteInfo.title}
        onChange={(value) =>
          setAttributes({
            notes: updateData(notes, value, selectedNote, "title"),
          })
        }
      />
      <TextareaControl
        className="mt5"
        label={__("Description", "b-blocks")}
        placeholder="Description"
        value={selectedNoteInfo.description}
        onChange={(value) =>
          setAttributes({
            notes: updateData(notes, value, selectedNote, "description"),
          })
        }
      />

      {selectedNoteInfo.link && (
        <>
          <InputControl
            className="mt10"
            label={__("Button Title", "b-blocks")}
            placeholder="button Title"
            value={selectedNoteInfo.link.text}
            onChange={(value) =>
              setAttributes({
                notes: updateData(notes, value, selectedNote, "link", "text"),
              })
            }
          />

          {selectedNoteInfo.type === "file" ? (
            <InlineMediaUpload
              className="mt10"
              label={__("File Link or Upload", "b-blocks")}
              placeholder={__("File url...", "b-blocks")}
              value={selectedNoteInfo.link.url}
              onChange={(value) =>
                setAttributes({
                  notes: updateData(notes, value, selectedNote, "link", "url"),
                })
              }
            />
          ) : (
            <InputControl
              className="mt5"
              label={__("Button Link", "b-blocks")}
              placeholder="button Link"
              value={selectedNoteInfo.link.url}
              onChange={(value) =>
                setAttributes({
                  notes: updateData(notes, value, selectedNote, "link", "url"),
                })
              }
            />
          )}
        </>
      )}
    </PanelBody>
  );
};

export default General;
