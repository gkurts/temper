import React, { Fragment } from "react";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = _ => ({
  center: {
    textAlign: "center"
  }
});

const CurrentTemp = ({ temp: { temperature, created }, trend, classes }) => {
  return (
    <Fragment>
      <Typography className={classes.center} variant="h1">
        {temperature}°
      </Typography>
      <Typography
        className={classes.center}
        style={{ marginBottom: 40 }}
        variant="subtitle2"
      >
        <Moment format="YYYY-MM-DD @ h:mm A">{created}</Moment>
      </Typography>
    </Fragment>
  );
};

export default withStyles(styles)(CurrentTemp);
