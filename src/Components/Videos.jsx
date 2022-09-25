import { Stack, Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

export default function Videos({ videos }) {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, id) => (
        <Box key={id}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}