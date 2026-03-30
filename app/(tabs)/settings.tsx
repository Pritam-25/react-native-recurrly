import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaview = styled(RNSafeAreaView);

const Settings = () => {
  return (
    <SafeAreaview
      edges={["top", "left", "right"]}
      className="flex-1 items-center justify-center bg-white"
    >
      <Text>settings</Text>
    </SafeAreaview>
  );
};

export default Settings;
