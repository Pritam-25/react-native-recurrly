import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_CONFIG = [
  {
    name: "index",
    title: "Home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
  },
  {
    name: "subscriptions",
    title: "Subscriptions",
    activeIcon: "wallet",
    inactiveIcon: "wallet-outline",
  },
  {
    name: "insights",
    title: "Insights",
    activeIcon: "analytics",
    inactiveIcon: "analytics-outline",
  },
  {
    name: "settings",
    title: "Settings",
    activeIcon: "settings",
    inactiveIcon: "settings-outline",
  },
] as const;

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0f172a",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          position: "absolute",
          bottom: insets.bottom + 12,
          height: 60,
          paddingTop: 6,
          paddingBottom: 6,
          borderTopWidth: 0,
          borderRadius: 20,
          marginHorizontal: 20,
          backgroundColor: "#f8fafc",
          shadowColor: "#000",
          shadowOpacity: 0.03,
          shadowRadius: 2,
          shadowOffset: { width: 0, height: 1 },
          elevation: 1,
        },
      }}
    >
      {TAB_CONFIG.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? tab.activeIcon : tab.inactiveIcon}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
