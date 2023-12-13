import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ScrollView, View, ViewStyle } from "react-native"
import { Text } from "app/components"
import { colors, spacing } from "app/theme"
import { useHeader } from "app/utils/useHeader"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen(_props) {
  useHeader(
    {
      leftIcon: "menu",
      rightIcon: "share",
      backgroundColor: colors.background,
      title: "",
    },
    [],
  )

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={$container}>
        <Text text={"Welcome Component"} />
      </View>
    </ScrollView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  padding: spacing.md,
}

