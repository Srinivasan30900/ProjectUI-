import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import './image.css'
import {
  Container,
  StyledLabel,
  TextField,
} from "./CRMComponent.Styles";


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    
    width: 745,
  },
});




class FullWidthTabs extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: 0,
      loading:true,
      person: null
    };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.json())
        .then(res => this.setState(
          {
            person: res.result[0],
            loading:false 
          }))
        .catch(err => err);
}

componentDidMount() {
    this.callAPI();
}

        
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const {items, error} = this.state;

    return (
      <div className={classes.root}>
        <Container>
          
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
           
            centered
          >
            <Tab label="Customer Info" />
            <Tab label="Account Info" />
            <Tab label="History" />
          </Tabs>
        
      
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer 
          dir={theme.direction}>
        

              <TextField>
                
               <img className='img' src="/images/profile1.jpg" alt="user image"/>
               <br></br>
              <StyledLabel >Name - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_full_name}</StyledLabel> )}</StyledLabel>
                  <br></br>

              <StyledLabel>Job Title - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_job_title}</StyledLabel> )}</StyledLabel>
                  <br></br>

              <StyledLabel>Company Name -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_company_name}</StyledLabel> )}</StyledLabel>
                  <br></br>

              <StyledLabel>Email -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.email}</StyledLabel> )} </StyledLabel>
                  <br></br>

              <StyledLabel>Address - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_address}</StyledLabel> )} </StyledLabel>
                  <br></br>

              <StyledLabel>Customer Queue - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_customer_queue}</StyledLabel> )} </StyledLabel>
                  <br></br>

              <StyledLabel>Issue -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_issue}</StyledLabel> )} </StyledLabel>
              </TextField>

          </TabContainer>


          <TabContainer dir={theme.direction}>
              <TextField>
                <br></br>
                <StyledLabel>Account Name - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_name}</StyledLabel> )}</StyledLabel>
                  <br></br>
                <StyledLabel>Account Number -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_number}</StyledLabel> )} </StyledLabel>
                  <br></br>
                <StyledLabel>Branch -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_branch}</StyledLabel> )} </StyledLabel>
                  <br></br>
                <StyledLabel>Account Rating -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_rating}</StyledLabel> )} </StyledLabel>
                  <br></br>
                <StyledLabel>Account Type -{ this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_type}</StyledLabel> )} </StyledLabel>
              </TextField>

          </TabContainer>
          
          <TabContainer dir={theme.direction}>

            <TextField>
              <br></br>
              <StyledLabel>Previous Call Information - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_previous_history}</StyledLabel> )}</StyledLabel>
                <br></br>
              <StyledLabel>Changes made in CRM - { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_changes_made_in_crm}</StyledLabel> )}</StyledLabel>
            </TextField>
          
          </TabContainer>
        </SwipeableViews>
        </Container>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
