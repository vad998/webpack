import * as $ from 'jquery'
import Post from '@models/Post'
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import logo from '@/assets/webpack-logo'
import '@/styles/style'

const post = new Post('Test title', logo)

console.log(json)
console.log(xml)
console.log(csv)

$('pre').html(post.toString())