import './card.scss'
import card_html from './card.html'
import { AlwinJS } from '../../alwinjs'
import { BasicButton } from '../button/button'
const _Card = AlwinJS.createComponent(card_html)
AlwinJS.appendNode(BasicButton, _Card.content.firstChild)
AlwinJS.appendNode(BasicButton, _Card.content.firstChild)
AlwinJS.appendNode(BasicButton, _Card.content.firstChild)
export const Card = _Card