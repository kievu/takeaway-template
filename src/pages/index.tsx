import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import { Container, Button } from "@material-ui/core"
import Header from "../components/header"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      marginBottom: 20,
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    details: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    appBarSpacer: theme.mixins.toolbar,

    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 250,
      height: 150,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
    },
  })
)

function MediaControlCard({
  image,
  price,
  description,
  title,
  onAdd,
}: {
  title: string
  image: string
  price: number
  onAdd: () => void
  description: string
}) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardMedia className={classes.cover} image={image} title="Kebab" />

        <CardContent>
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {price},-
          </Typography>
        </CardContent>
      </div>
      <CardContent className={classes.button}>
        <Button
          variant="contained"
          size="small"
          onClick={onAdd}
          style={{ background: "#EC5825", color: "white" }}
        >
          Legg til
        </Button>
      </CardContent>
    </Card>
  )
}

const data: Kebab[] = [
  {
    id: 0,
    title: "Kebab i pita",
    description:
      "Kebab i pita med salat og dressing. Velg mellom svak, medium eller sterk.",
    price: 69,
    image: "/images/pita.jpg",
  },
  {
    id: 1,
    title: "Kebabtallerken",
    description:
      "Kebab med pommes frites, salat, dressing. Velg mellom svak, medium eller sterk.",
    price: 139,
    image: "/images/tallerken.webp",
  },
  {
    id: 2,
    title: "Kebab i pita",
    description:
      "Kebab i pita med salat og dressing. Velg mellom svak, medium eller sterk.",
    price: 69,
    image: "/images/pita.jpg",
  },
  {
    id: 3,
    title: "Kebabtallerken",
    description:
      "Kebab med pommes frites, salat, dressing. Velg mellom svak, medium eller sterk.",
    price: 139,
    image: "/images/tallerken.webp",
  },
  {
    id: 4,
    title: "Kebab i pita",
    description:
      "Kebab i pita med salat og dressing. Velg mellom svak, medium eller sterk.",
    price: 69,
    image: "/images/pita.jpg",
  },
  {
    id: 5,
    title: "Kebabtallerken",
    description:
      "Kebab med pommes frites, salat, dressing. Velg mellom svak, medium eller sterk.",
    price: 139,
    image: "/images/tallerken.webp",
  },
  {
    id: 6,
    title: "Kebab i pita",
    description:
      "Kebab i pita med salat og dressing. Velg mellom svak, medium eller sterk.",
    price: 69,
    image: "/images/pita.jpg",
  },
  {
    id: 7,
    title: "Kebabtallerken",
    description:
      "Kebab med pommes frites, salat, dressing. Velg mellom svak, medium eller sterk.",
    price: 139,
    image: "/images/tallerken.webp",
  },
]

type Kebab = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

const IndexPage = () => {
  const [products, setProducts] = useState<Kebab[]>([])
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        siteTitle="Kebab"
        products={products}
        removeProduct={id =>
          setProducts(prev => {
            const copyArray = [...prev]
            const index = copyArray.indexOf(id)
            copyArray.splice(index, 1)
            return copyArray
          })
        }
      />
      <div className={classes.appBarSpacer} />

      <Container maxWidth="sm" className={classes.container}>
        {data.map((el, index) => (
          <MediaControlCard
            key={el.id}
            title={el.title}
            price={el.price}
            description={el.description}
            image={el.image}
            onAdd={() => setProducts(prev => prev.concat(el))}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage
