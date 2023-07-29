import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width='100%'
        backgroundColor={theme.palette.background.alt}
        p='1rem 0'
        textAlign='center'>
        <Typography fontWeight='bold' fontSize='32px' color='primary'>
          Frientify
        </Typography>
      </Box>

      <Box
        padding='30px'
        width={isNonMobileScreens ? "50%" : "93%"}
        m='1rem auto'
        pb='1rem'
        borderRadius='1.5rem'
        backgroundColor={theme.palette.background.alt}>
        <Typography
          fontWeight='500'
          variant='h5'
          sx={{ mb: "1.5rem" }}
          textAlign='center'>
          Welcome to Frientify - Where Friends Unite!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
