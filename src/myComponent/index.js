import {MyComponent} from "./MyComponent"
import {connect} from "react-redux";
import {applicationSelector} from "../store/reducer";
import {createApplicationName} from "../store/actions";

const mapStateToProps = (state) =>{
    return {applicationName: applicationSelector(state)}
}

const mapDispatchToProps = dispatch => ({createApplicationName: () => dispatch(createApplicationName())})


export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);