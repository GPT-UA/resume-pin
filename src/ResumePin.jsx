import React from 'react'
import { Notes, PushPinOutlined } from '@mui/icons-material'

const ResumePin = ({ fontSize = 'small', ...props }) => (
    <div style={{ position: 'relative', display: 'inline-block' }} {...props}>
        <Notes sx={{ position: 'absolute', top: '13px' }} fontSize={fontSize} />
        <PushPinOutlined fontSize={fontSize} />
    </div>
)

export default ResumePin