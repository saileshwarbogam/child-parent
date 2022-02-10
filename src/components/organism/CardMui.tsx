import customStyle from "../theme";
import { CardMedia, Grid, Typography, Card } from "@mui/material";
import BookTitle from '../atoms/BookTitle'
import AuthorName from "../atoms/AuthorName";
import ReadTime from "../molecule/ReadTime";
import More from "../atoms/More";
type CardMuiProps = {
  details: {
    image: string;
    name: string;
    author: string;
    time: string;
  }[];
};

const CardMui = (props: CardMuiProps) => {
  const classes = customStyle();

  const bookCards = props.details.map((e) => (
    <Grid item >
      <Card className={classes.cardStyle}>
        <CardMedia
          component="img"
          sx={{
            height:"292px",
            width:"294.1px"
          }}
          image={e.image}
          alt="Book"
        />
         <BookTitle bookName={e.name} />
         <AuthorName authName={e.author} />
         <ReadTime time={e.time} />
         <More />
         <Typography
          sx={{
            width: "284px",
            height: "15px",
            position: "relative",
            background: "#F1F6F4",
            border: "1px solid #E1ECFC",
            boxSizing: "border-box",
            borderRadius: "0px 0px 8px 8px",
          }}
        />
      </Card>
    </Grid>
  ));
  return <Grid width = '1000px' columnSpacing='20px' rowSpacing = '20px' container>{bookCards}</Grid>;
};
export default CardMui;
