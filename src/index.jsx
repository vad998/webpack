import * as $ from 'jquery'
import Post from '@models/Post'
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import logo from '@/assets/webpack-logo'
import '@/styles/style'
import '@/styles/less.less'
import '@/styles/scss.scss'
import '@/babel'
import React from 'react'
import { render } from 'react-dom'

const post = new Post('Test title', logo)

console.log(json)
console.log(xml)
console.log(csv)

$('pre').html(post.toString())

// const App = () => (
//     <div class="container">
//         <h1>Webpack Course</h1>
//         <hr />
//         <div class="logo" />
//         <hr />
//         <pre />
//         <hr />
//         <div class="less" />
//         <div class="scss" />
//     </div>
// )

// render(<App />, document.getElementById('app'))