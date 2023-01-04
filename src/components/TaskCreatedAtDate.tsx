import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function TaskCreatedAtDate() {

    return (
        <TextField
            id="date"
            label="Data de criação"
            type="datetime-local"
            disabled
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}