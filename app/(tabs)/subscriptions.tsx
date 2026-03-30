import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaview = styled(RNSafeAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaview
      edges={["top", "left", "right"]}
      className="flex-1 items-center justify-center bg-white"
    >
      <Text>subscriptions</Text>
    </SafeAreaview>
  );
};

export default Subscriptions;
