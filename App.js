import { SafeAreaProvider } from "react-native-safe-area-context";
import WebviewScreen from "./WebviewScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <WebviewScreen />
    </SafeAreaProvider>
  );
};

export default App;
