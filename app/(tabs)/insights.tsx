import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaview = styled(RNSafeAreaView);

const insights = () => {
  return (
    <SafeAreaview className="flex-1 items-center justify-center bg-white">
      <Text>insights</Text>
    </SafeAreaview>
  );
};

export default insights;
