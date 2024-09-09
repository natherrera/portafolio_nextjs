"use client";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const [open, setOpen] = useState(true);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  console.log("hola mundo")
  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
