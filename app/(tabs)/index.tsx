import "@/global.css";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaview = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaview className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <View className="mt-6 w-64 gap-3">
        <Link href="/onboarding" asChild>
          <Pressable className="rounded bg-blue-500 p-4">
            <Text className="text-center font-semibold text-white">
              Go to onboarding
            </Text>
          </Pressable>
        </Link>

        <Link href="/sign-in" asChild>
          <Pressable className="rounded bg-emerald-600 p-4">
            <Text className="text-center font-semibold text-white">
              Sign in
            </Text>
          </Pressable>
        </Link>

        <Link href="/sign-up" asChild>
          <Pressable className="rounded bg-slate-800 p-4">
            <Text className="text-center font-semibold text-white">
              Sign up
            </Text>
          </Pressable>
        </Link>

        <Link
          href={{
            pathname: "/subscriptions/[id]",
            params: {
              id: "claude",
            },
          }}
          asChild
        >
          <Pressable className="rounded bg-slate-800 p-4">
            <Text className="text-center font-semibold text-white">
              Spotify Subscription
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaview>
  );
}
