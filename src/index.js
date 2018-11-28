import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CurrentTemp from "./CurrentTemp";
import PreviousTemps from "./PreviousTemps";
import useTemps from "./useTemps";

function App() {
  const temps = useTemps();

  console.log("temps", temps);

  return (
    <div className="App">
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item md={3}>
          {!temps.length ? (
            <Typography variant="body1">loading...</Typography>
          ) : (
              <Fragment>
                <CurrentTemp temp={temps[0]} />
                <Divider />
                <PreviousTemps temps={[...temps.splice(1)]} />
              </Fragment>
            )}
        </Grid>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
