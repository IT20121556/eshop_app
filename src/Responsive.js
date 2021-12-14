import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media only screen and (mac-width: 380px) {
			${props}
		}
	`;
};
