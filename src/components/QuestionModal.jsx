import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import data from "../data/index.json";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function PromptModal({ question }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="bg-gray-400 text-white font-semibold p-1 text-xl px-3 rounded-lg"
        onClick={handleOpen}
      >
        Prompt
      </button>
      {/* <Button onClick={handleOpen}>Prompt</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="chatBox rounded-xl overflow-y-scroll">
          {data.map((ele, idx) => {
            return (
              <div key = {idx} className="flex gap-3 items-start justify-start">
                <p>{idx + 1}</p>
                <p>{ele.question}</p>
              </div>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
