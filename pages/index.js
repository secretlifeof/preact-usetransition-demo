import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition } from 'react-spring'

import IndexDetail from '../containers/index-detail'

const Main = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`

const Button = styled.div`
	padding: 2vw;
	height: 10vh;
	width: 10vw;
	background: green;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);
	cursor: pointer;

	@media (hover) {
		&:hover {
			background: blue;
		}
	}
`

const index = () => {
	const [ detailVisibility, setVisibility ] = useState(false)

	const transitions = useTransition(detailVisibility, null, {
		from: { visibility: 'hidden', transform: 'translate3d(0, 100vh, 0)' },
		enter: { visibility: 'visible', transform: 'translate3d(0, 0vh, 0)' },
		leave: { visibility: 'hidden', transform: 'translate3d(0, -100vh, 0)' }
	})

	return (
		<Main>
			<Button onClick={() => setVisibility(true)}>
				<div>HUG ME</div>
			</Button>
			{transitions.map(
				({ item, key, props }) => item && <IndexDetail setVisibility={setVisibility} key={key} styleProps={props} />
			)}
			{/* <IndexDetail /> */}
		</Main>
	)
}

export default index
