import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './Style.css'
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
            indicatorColor="primary"
            textColor="primary"
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
              <div className='txt' >NAME  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_full_name}</StyledLabel> )}</div>
                  <br></br>

              <div  className='txt'>JOB TITLE  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_job_title}</StyledLabel> )}</div>
                  <br></br>

              <div  className='txt'>COMPANY NAME { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_company_name}</StyledLabel> )}</div>
                  <br></br>

              <div  className='txt'>EMAIL { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.email}</StyledLabel> )} </div>
                  <br></br>

              <div  className='txt'>ADDRESS  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_address}</StyledLabel> )} </div>
                  <br></br>

              <div  className='txt'>CUSTOMER QUEUE  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_customer_queue}</StyledLabel> )} </div>
                  <br></br>

              <div  className='txt'>ISSUE { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_issue}</StyledLabel> )} </div>
              </TextField>

          </TabContainer>


          <TabContainer dir={theme.direction}>
              <TextField>
                <br></br>
                <div  className='txt'>ACCOUNT NAME  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_name}</StyledLabel> )}</div>
                  <br></br>
                <div  className='txt'>ACCOUNT NUMBER { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_number}</StyledLabel> )} </div>
                  <br></br>
                <div  className='txt'>BRANCH { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_branch}</StyledLabel> )} </div>
                  <br></br>
                <div  className='txt'>ACCOUNT RATING { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_rating}</StyledLabel> )} </div>
                  <br></br>
                <div  className='txt'>ACCOUNT TYPE { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_account_type}</StyledLabel> )} </div>
              </TextField>

          </TabContainer>
          
          <TabContainer dir={theme.direction}>

            <TextField>
              <br></br>
              <div  className='txt'>PREVIOUS CALL INFORMATION  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_previous_history}</StyledLabel> )}</div>
                <br></br>
              <div  className='txt'>CHANGES MADE IN CRM  { this.state.loading?(  <div>loading..</div> ):
                ( <StyledLabel> {this.state.person.u_changes_made_in_crm}</StyledLabel> )}</div>
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
