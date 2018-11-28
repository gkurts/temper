import React, { Fragment } from "react";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = _ => ({
  listItem: {
    textAlign: "center"
  }
});

const TempListItem = ({ temp, classes }) => {
  const created = moment(temp.created);
  return (
    <Fragment>
      <ListItem>
        <ListItemText
          className={classes.listItem}
          primary={temp.temperature}
          secondary={created.format("h:mm A")}
        />
      </ListItem>
    </Fragment>
  );
};

const PreviousTemps = ({ temps, classes }) => {
  return (
    <List>
      {temps.map(temp => (
        <Fragment>
          <TempListItem key={temp.id} temp={temp} classes={classes} />
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default withStyles(styles)(PreviousTemps);
