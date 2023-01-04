import TextField from '@mui/material/TextField';

export default function TaskDate() {

  return (
    <TextField
      id="date"
      label="Data para conclusão"
      type="date"
      defaultValue="2017-05-24"
      sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}