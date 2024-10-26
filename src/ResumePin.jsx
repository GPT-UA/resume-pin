import React from 'react'
import { Notes, PushPinOutlined } from '@mui/icons-material'

const ResumePin = ({ fontSize = 'small' }) => (
    <>
        <Notes sx={{ position: 'absolute', top: '15px' }} fontSize={fontSize} />
        <PushPinOutlined fontSize={fontSize} />
    </>
)

export default ResumePin