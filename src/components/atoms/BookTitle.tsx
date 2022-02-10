import {Typography }from '@mui/material';
type BookTitleProps = {
  bookName: string;
};

const BookTitle = (props: BookTitleProps) => {
  return (<>
    <Typography
        variant='subtitle1'
         sx={{
            // fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontSize: "18px",
            fontWeight: 700,
            marginLeft:"16px",
            marginTop:"23px",
            }}>
        {props.bookName}
    </Typography>
  </>);
};

export default BookTitle;
