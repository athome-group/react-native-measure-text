import { NativeModules } from "react-native";

const { RNMeasureText } = NativeModules;

const RNMeasureText = requireNativeComponent("RNMeasureText", MeasureText);

export default MeasureText;
