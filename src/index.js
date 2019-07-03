import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./views/Login";

const AppNavigator = createStackNavigator({
  Home: {screen:Login}
});
export default createAppContainer(AppNavigator);