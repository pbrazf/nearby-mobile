import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
    container: {
        maxHeight: 36, 
        position: "absolute",
        zIndex: 1,
        top: 10, // propriedade de distância da barra de categorias até o topo (padrão=64)
    },
    content: {
        gap: 8,
        paddingHorizontal: 24,
    },
})
