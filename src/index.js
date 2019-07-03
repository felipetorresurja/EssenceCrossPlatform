import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./views/Login";
import Intro from "./views/Intro";

const AppNavigator = createStackNavigator({
  Home: {screen:Intro}
});
export default createAppContainer(AppNavigator);