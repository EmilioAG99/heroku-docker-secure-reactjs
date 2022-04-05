import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function AvatarStack(){
    return(
            <Stack direction="row" spacing={2}>
                <Avatar alt="H" src="https://fantasytopics.com/wp-content/uploads/2022/02/Porco-Galliard-Season-4.png.webp"  sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/64/7d/ba/647dba29838340cefa9fb57e2cec053a.jpg" sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Cindy Baker" src="https://imgix.ranker.com/user_node_img/4261/85210192/original/85210192-photo-u10?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=144&w=144" sx={{ width: 56, height: 56 }}/>
            </Stack>
    )
}
export default AvatarStack