import React from 'react'
import { Notes, PushPinOutlined } from '@mui/icons-material'

const ResumePin = ({ fontSize = 'small', ...props }) => (
    <div {...props}>
        <Notes sx={{ position: 'absolute', top: '15px' }} fontSize={fontSize} />
        <PushPinOutlined fontSize={fontSize} />
    </div>
)

export default ResumePin