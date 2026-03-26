--[[

.dP"Y8 Yb  dP 8888b.  888888 
`Ybo."  YbdP   8I  Yb 88__   
o.`Y8b   8P    8I  dY 88""   
8bodP'  dP    8888Y"  888888  v0

]]

local inputservice =	game:GetService("InsertService")
local tweenservice = 	game:GetService("TweenService")
local https = 			game:GetService("HttpService")
local runservice =		game:GetService("RunService")
local userinput =		game:GetService("UserInputService")
local players =         game:GetService("Players"):GetPlayers()
local textservice =     game:GetService('TextService')
local player =          game:GetService('Players')
local textservice =     game:GetService('TextService')
local coregui =         game:GetService("CoreGui")

-- update check
local update = false
if update then
	local updategui = game:GetObjects("rbxassetid://122225389943465")[1]
	updategui.Parent = coregui

	local cord = '/GzumVvz3QM'

	task.wait(0.5)
	updategui.Enabled = true

	updategui.main.BackgroundTransparency = 1
	updategui.main.Size = UDim2.new(0, 150,0, 150)
	updategui.main.time.TextTransparency = 1
	updategui.main.info.TextTransparency = 1
	updategui.main.text.TextLabel.TextTransparency = 1
	updategui.main.text.more.TextTransparency = 1

	tweenservice:Create(updategui.main, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()
	tweenservice:Create(updategui.main, TweenInfo.new(0.75, Enum.EasingStyle.Quart), {Size = UDim2.new(0, 350,0, 230)}):Play()

	task.wait(0.07)

	tweenservice:Create(updategui.main.time, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
	tweenservice:Create(updategui.main.info, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
	task.wait(0.07)
	tweenservice:Create(updategui.main.text.TextLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
	task.wait(0.07)
	tweenservice:Create(updategui.main.text.more, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()

	local duration = 25
	local startTime = tick()

	local connection
	connection = runservice.Heartbeat:Connect(function()
		local elapsed = tick() - startTime
		local remaining = math.max(duration - elapsed, 0)

		updategui.main.time.Text = "Destroying in " .. string.format("%.1f", remaining) .. " secs"

		if remaining <= 0 then
			connection:Disconnect()

			tweenservice:Create(updategui.main.text.TextLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
			task.wait(0.07)
			tweenservice:Create(updategui.main.text.more, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
			task.wait(0.2)
			tweenservice:Create(updategui.main, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
			tweenservice:Create(updategui.main, TweenInfo.new(0.75, Enum.EasingStyle.Quart), {Size = UDim2.new(0, 150,0, 130)}):Play()
			updategui.main.s2.Visible = false



			task.wait(0.07)

			tweenservice:Create(updategui.main.time, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
			tweenservice:Create(updategui.main.info, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()

			task.wait(0.75)
			updategui:Destroy()
		end
	end)

	updategui.main.s2.interact.MouseButton1Click:Connect(function()

		tweenservice:Create(updategui.main.s2.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Color = Color3.fromRGB(74, 255, 33)}):Play()
		tweenservice:Create(updategui.main.s2.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0}):Play()
		task.wait(0.5)
		tweenservice:Create(updategui.main.s2.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Color = Color3.fromRGB(87, 101, 242)}):Play()
		tweenservice:Create(updategui.main.s2.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0.5}):Play()
		setclipboard(cord)
	end)
end

if update then return end

local Library =         game:GetObjects("rbxassetid://123800669522471")[1]
local Loader =          game:GetObjects("rbxassetid://110221114597158")[1]

local resizing =        false
local screenSize =      workspace.CurrentCamera.ViewportSize
local isMobile =        userinput.TouchEnabled or (screenSize.X < 1024 and screenSize.Y < 768)
local dragOffset =        255
local dragOffsetMobile =  150
local camera =          workspace.CurrentCamera

Library.Enabled = false
Loader.Enabled = false

local loaded = false

local syde = {

	theme = {
		['Accent'] = Color3.fromRGB(255, 151, 227);
		['HitBox'] = Color3.fromRGB(255, 151, 227);
		['DropShadow']   = ColorSequence.new(Color3.fromRGB(0, 0, 0));

	};
	Connections = {};
	Comms = Instance.new('BindableEvent');
	ParentOverride = nil;
	Build = 'Sv0';
	plugins = {};
	ConfigEnabled = false;
	ConfigFolder = 'Syde';
	ConfigFile = 'Config';
	Flags = {};
	SettingsFlags = {};
}

-- @Utilities

function syde:DeepMerge(target, source)
	for k, v in pairs(source) do
		if type(v) == "table" and type(target[k]) == "table" then
			self:DeepMerge(target[k], v) 
		else
			target[k] = v
		end
	end
end

function syde:UpdateTheme(Config)
	if type(Config) ~= "table" then
		warn("[UpdateTheme] Invalid configuration table")
		return
	end

	local updatedKeys = {}

	for key, value in pairs(Config) do
		if self.theme[key] ~= nil then
			if typeof(self.theme[key]) == typeof(value) then
				if type(value) == "table" then
					self:DeepMerge(self.theme[key], value)
				else
					self.theme[key] = value
				end
				table.insert(updatedKeys, key)
			else
				warn(("[UpdateTheme] Type mismatch for key '%s' (expected %s, got %s)"):format(
					key, typeof(self.theme[key]), typeof(value)
					))
			end
		else
			warn("[UpdateTheme] Key '" .. key .. "' does not exist in theme")
		end
	end

	if #updatedKeys > 0 then
		for _, key in ipairs(updatedKeys) do
			self.Comms:Fire(key, self.theme[key])
		end
	end
end

-- fractality

local RunService = game:GetService'RunService'
local camera = workspace.CurrentCamera


do
	local function IsNotNaN(x)
		return x == x
	end
	local continue = IsNotNaN(camera:ScreenPointToRay(0,0).Origin.x)
	while not continue do
		RunService.RenderStepped:wait()
		continue = IsNotNaN(camera:ScreenPointToRay(0,0).Origin.x)
	end
end

local binds = {}
local root = Instance.new('Folder', camera)
root.Name = 'neon'


local GenUid; do -- Generate unique names for RenderStepped bindings
	local id = 0
	function GenUid()
		id = id + 1
		return 'neon::'..tostring(id)
	end
end

local DrawQuad; do
	local acos, max, pi, sqrt = math.acos, math.max, math.pi, math.sqrt
	local sz = 0.2

	function DrawTriangle(v1, v2, v3, p0, p1) -- I think Stravant wrote this function
		local s1 = (v1 - v2).magnitude
		local s2 = (v2 - v3).magnitude
		local s3 = (v3 - v1).magnitude
		local smax = max(s1, s2, s3)
		local A, B, C
		if s1 == smax then
			A, B, C = v1, v2, v3
		elseif s2 == smax then
			A, B, C = v2, v3, v1
		elseif s3 == smax then
			A, B, C = v3, v1, v2
		end

		local para = ( (B-A).x*(C-A).x + (B-A).y*(C-A).y + (B-A).z*(C-A).z ) / (A-B).magnitude
		local perp = sqrt((C-A).magnitude^2 - para*para)
		local dif_para = (A - B).magnitude - para

		local st = CFrame.new(B, A)
		local za = CFrame.Angles(pi/2,0,0)

		local cf0 = st

		local Top_Look = (cf0 * za).lookVector
		local Mid_Point = A + CFrame.new(A, B).lookVector * para
		local Needed_Look = CFrame.new(Mid_Point, C).lookVector
		local dot = Top_Look.x*Needed_Look.x + Top_Look.y*Needed_Look.y + Top_Look.z*Needed_Look.z

		local ac = CFrame.Angles(0, 0, acos(dot))

		cf0 = cf0 * ac
		if ((cf0 * za).lookVector - Needed_Look).magnitude > 0.01 then
			cf0 = cf0 * CFrame.Angles(0, 0, -2*acos(dot))
		end
		cf0 = cf0 * CFrame.new(0, perp/2, -(dif_para + para/2))

		local cf1 = st * ac * CFrame.Angles(0, pi, 0)
		if ((cf1 * za).lookVector - Needed_Look).magnitude > 0.01 then
			cf1 = cf1 * CFrame.Angles(0, 0, 2*acos(dot))
		end
		cf1 = cf1 * CFrame.new(0, perp/2, dif_para/2)

		if not p0 then
			p0 = Instance.new('Part')
			p0.FormFactor = 'Custom'
			p0.TopSurface = 0
			p0.BottomSurface = 0
			p0.Anchored = true
			p0.CanCollide = false
			p0.Material = 'Glass'
			p0.Size = Vector3.new(sz, sz, sz)
			local mesh = Instance.new('SpecialMesh', p0)
			mesh.MeshType = 2
			mesh.Name = 'WedgeMesh'
		end
		p0.WedgeMesh.Scale = Vector3.new(0, perp/sz, para/sz)
		p0.CFrame = cf0

		if not p1 then
			p1 = p0:clone()
		end
		p1.WedgeMesh.Scale = Vector3.new(0, perp/sz, dif_para/sz)
		p1.CFrame = cf1

		return p0, p1
	end

	function DrawQuad(v1, v2, v3, v4, parts)
		parts[1], parts[2] = DrawTriangle(v1, v2, v3, parts[1], parts[2])
		parts[3], parts[4] = DrawTriangle(v3, v2, v4, parts[3], parts[4])
	end
end


--------------------------------
---- Module API --------------------------------
----------------------------------------------------------------


-- Create a part binding for a GuiObject.
function syde:BindFrame(frame, properties)
	if binds[frame] then
		return binds[frame].parts
	end

	local uid = GenUid()
	local parts = {}
	local f = Instance.new('Folder', root)
	f.Name = frame.Name

	local parents = {} -- construct hierarchy tree for rotation
	do
		local function add(child)
			if child:IsA'GuiObject' then
				parents[#parents + 1] = child
				add(child.Parent)
			end
		end
		add(frame)
	end

	local function UpdateOrientation(fetchProps)
		local zIndex = 1 - 0.05*frame.ZIndex
		-- the transparency inversion bug still surfaces when there's z-fighting
		local tl, br = frame.AbsolutePosition, frame.AbsolutePosition + frame.AbsoluteSize
		local tr, bl = Vector2.new(br.x, tl.y), Vector2.new(tl.x, br.y)
		do
			local rot = 0;
			for _, v in ipairs(parents) do
				rot = rot + v.Rotation
			end
			if rot ~= 0 and rot%180 ~= 0 then
				local mid = tl:lerp(br, 0.5)
				local s, c = math.sin(math.rad(rot)), math.cos(math.rad(rot))
				local vec = tl
				tl = Vector2.new(c*(tl.x - mid.x) - s*(tl.y - mid.y), s*(tl.x - mid.x) + c*(tl.y - mid.y)) + mid
				tr = Vector2.new(c*(tr.x - mid.x) - s*(tr.y - mid.y), s*(tr.x - mid.x) + c*(tr.y - mid.y)) + mid
				bl = Vector2.new(c*(bl.x - mid.x) - s*(bl.y - mid.y), s*(bl.x - mid.x) + c*(bl.y - mid.y)) + mid
				br = Vector2.new(c*(br.x - mid.x) - s*(br.y - mid.y), s*(br.x - mid.x) + c*(br.y - mid.y)) + mid
			end
		end
		DrawQuad(
			camera:ScreenPointToRay(tl.x, tl.y, zIndex).Origin, 
			camera:ScreenPointToRay(tr.x, tr.y, zIndex).Origin, 
			camera:ScreenPointToRay(bl.x, bl.y, zIndex).Origin, 
			camera:ScreenPointToRay(br.x, br.y, zIndex).Origin, 
			parts
		)
		if fetchProps then
			for _, pt in pairs(parts) do
				pt.Parent = f
			end
			for propName, propValue in pairs(properties) do
				for _, pt in pairs(parts) do
					pt[propName] = propValue
				end
			end
		end
	end

	UpdateOrientation(true)
	RunService:BindToRenderStep(uid, 2000, UpdateOrientation)

	binds[frame] = {
		uid = uid;
		parts = parts;
	}
	return binds[frame].parts
end

-- Applies the `properties` table to bound parts.
function syde:Modify(frame, properties)
	local parts = syde:GetBoundParts(frame)
	if parts then
		for propName, propValue in pairs(properties) do
			for _, pt in pairs(parts) do
				pt[propName] = propValue
			end
		end
	else
		warn(('No part bindings exist for %s'):format(frame:GetFullName()))
	end
end

-- Removes the part binding from a gui object if one exists.
function syde:UnbindFrame(frame)
	local cb = binds[frame]
	if cb then
		RunService:UnbindFromRenderStep(cb.uid)
		for _, v in pairs(cb.parts) do
			v:Destroy()
		end
		binds[frame] = nil
	else
		warn(('No part bindings exist for %s'):format(frame:GetFullName()))
	end
end

-- Returns true if a part binding exists for the gui object.
function syde:HasBinding(frame)
	return binds[frame] ~= nil
end

-- Returns an array using this.
function syde:GetBoundParts(frame)
	return binds[frame] and binds[frame].parts
end



function syde:GetDark(Color, val, mode)
	if typeof(Color) ~= "Color3" or type(val) ~= "number" then
		warn("[getdark] Invalid input: Expected (Color3, number)")
		return Color
	end

	local H, S, V = Color:ToHSV()

	val = math.clamp(val, 0.1, 10) 

	if mode == "subtract" then
		V = math.clamp(V - (val / 10), 0, 1)  
	else
		V = math.clamp(V / val, 0, 1)  
	end

	return Color3.fromHSV(H, S, V)
end

function syde:GetLighter(color: Color3, strength: number)
	strength = math.clamp(strength or 0.2, 0, 1)

	return Color3.new(
		color.R + (1 - color.R) * strength,
		color.G + (1 - color.G) * strength,
		color.B + (1 - color.B) * strength
	)
end

function syde:ColorPack(color)
	assert(typeof(color) == "Color3", "PackColor expects a Color3 value.")

	-- Convert to RGB integer values
	return {
		R = math.round(color.R * 255),
		G = math.round(color.G * 255),
		B = math.round(color.B * 255)
	}
end

function syde:ColorUnpack(color)
	assert(type(color) == "table" or type(color) == "string", "Invalid color format. Expected table (RGB) or string (HEX).")

	if type(color) == "table" then

		assert(color.R and color.G and color.B, "RGB table must contain 'R', 'G', and 'B' keys.")
		return Color3.fromRGB(math.clamp(color.R, 0, 255), math.clamp(color.G, 0, 255), math.clamp(color.B, 0, 255))
	elseif type(color) == "string" then

		local hex = color:match("^#?(%x%x%x%x%x%x)$")
		assert(hex, "Invalid HEX color format. Expected '#RRGGBB' or 'RRGGBB'.")
		local r, g, b = tonumber(hex:sub(1, 2), 16), tonumber(hex:sub(3, 4), 16), tonumber(hex:sub(5, 6), 16)
		return Color3.fromRGB(r, g, b)
	end
end

function syde:HidePH(instance, placeholder, recursive)
	if typeof(instance) ~= "Instance" or type(placeholder) ~= "string" then
		warn("[removeplaceholder] Invalid input: Expected (Instance, string)")
		return
	end

	local target = instance:FindFirstChild(placeholder)

	if not target then
		warn(("[removeplaceholder] Placeholder '%s' not found in instance '%s'"):format(placeholder, instance.Name))
		return
	end

	if target:IsA("GuiObject") then
		target.Visible = false
	else
		warn(("[removeplaceholder] '%s' is not a GuiObject and cannot be hidden"):format(placeholder))
		return
	end

	if recursive then
		for _, child in ipairs(target:GetDescendants()) do
			if child:IsA("GuiObject") then
				child.Visible = false
			end
		end
	end
end

function syde:AddConnection(Type, Callback)
	if typeof(Type) ~= "RBXScriptSignal" then
		error("[AddConnection] Invalid Type: Expected RBXScriptSignal, got " .. typeof(Type))
	end
	if typeof(Callback) ~= "function" then
		error("[AddConnection] Invalid Callback: Expected function, got " .. typeof(Callback))
	end

	local Connection = Type:Connect(Callback)
	local ConnectionData = { Connection = Connection }

	syde.Connections = syde.Connections or {}
	table.insert(syde.Connections, ConnectionData)

	local function Disconnect()
		if Connection.Connected then
			Connection:Disconnect()
		end

		for i = #syde.Connections, 1, -1 do
			if syde.Connections[i] == ConnectionData then
				table.remove(syde.Connections, i)
				break
			end
		end
	end

	task.spawn(function()
		task.wait(10)
		for i = #syde.Connections, 1, -1 do
			if not syde.Connections[i].Connection.Connected then
				table.remove(syde.Connections, i)
			end
		end
	end)

	return Connection, Disconnect
end

--@@Bento

local Bento = {}
Bento.__index = Bento

-- create layout
function Bento.new(container, config)
	local self = setmetatable({}, Bento)

	self.Container = container
	self.Items = {}

	self.Rows = {} -- NEW (optional manual rows)

	self.Gap = config.Gap or 8
	self.RightPadding = config.RightPadding or 16
	self.TweenTime = config.TweenTime or 0.3

	self.OriginalContainerSize = container.Size

	self.Original = {}
	self.ActiveTweens = {}

	return self
end

-- NEW (optional)
function Bento:NewRow()
	local row = {}
	table.insert(self.Rows,row)
	return row
end


-- register frame
function Bento:AddItem(frame, options, row)

	frame.AnchorPoint = Vector2.new(0,0)

	local item = {
		Frame = frame,
		Bottom = options and options.Bottom,
		Row = row -- NEW
	}

	self.Original[frame] = {
		Position = frame.Position,
		Size = frame.Size
	}

	table.insert(self.Items,item)

	if row then
		table.insert(row,item)
	end

end

-- tween helper
function Bento:Tween(frame, goal)

	if self.ActiveTweens[frame] then
		self.ActiveTweens[frame]:Cancel()
	end

	local tween = tweenservice:Create(
		frame,
		TweenInfo.new(
			self.TweenTime,
			Enum.EasingStyle.Quad,
			Enum.EasingDirection.Out
		),
		goal
	)

	self.ActiveTweens[frame] = tween
	tween:Play()

	tween.Completed:Connect(function()
		if self.ActiveTweens[frame] == tween then
			self.ActiveTweens[frame] = nil
		end
	end)

end

-- calculate layout
function Bento:Update()

	local containerWidth = self.Container.AbsoluteSize.X

	local normalItems = {}
	local bottomItems = {}

	for _,item in ipairs(self.Items) do
		if item.Bottom then
			table.insert(bottomItems,item)
		else
			table.insert(normalItems,item)
		end
	end


	---------------------------------
	-- rows
	---------------------------------

	local sortedRows = {}

	-- if manual rows exist, use them
	if #self.Rows > 0 then

		for _,row in ipairs(self.Rows) do
			table.insert(sortedRows,{
				Items = row
			})
		end

	else
		-- fallback to original Y-based grouping

		local rows = {}

		for _,item in ipairs(normalItems) do

			local original = self.Original[item.Frame]
			local y = original.Position.Y.Offset

			rows[y] = rows[y] or {}
			table.insert(rows[y],item)

		end

		for y,row in pairs(rows) do

			table.insert(sortedRows,{
				Y = y,
				Items = row
			})

		end

		table.sort(sortedRows,function(a,b)
			return a.Y < b.Y
		end)

	end



	---------------------------------
	-- detect stack mode
	---------------------------------

	local widestRow = 0

	for _,row in ipairs(sortedRows) do

		local width = 0

		for _,item in ipairs(row.Items) do
			width += self.Original[item.Frame].Size.X.Offset
		end

		width += (#row.Items-1) * self.Gap

		if width > widestRow then
			widestRow = width
		end

	end


	local stacked = widestRow > containerWidth



	---------------------------------
	-- STACK MODE
	---------------------------------

	if stacked then

		local y = 0

		local function stackItem(item)

			local frame = item.Frame
			local original = self.Original[frame]

			self:Tween(frame,{
				Position = UDim2.fromOffset(0,y),
				Size = UDim2.fromOffset(
					containerWidth - self.RightPadding,
					original.Size.Y.Offset
				)
			})

			y += original.Size.Y.Offset + self.Gap

		end


		for _,row in ipairs(sortedRows) do
			for _,item in ipairs(row.Items) do
				if not item.Bottom then -- FIX
					stackItem(item)
				end
			end
		end

		for _,item in ipairs(bottomItems) do
			stackItem(item)
		end


		self.Container.Size = UDim2.new(
			self.OriginalContainerSize.X.Scale,
			self.OriginalContainerSize.X.Offset,
			0,
			y - self.Gap
		)

		return
	end



	---------------------------------
	-- NORMAL MODE
	---------------------------------

	for _,row in ipairs(sortedRows) do

		table.sort(row.Items,function(a,b)

			local ax = self.Original[a.Frame].Position.X.Offset
			local bx = self.Original[b.Frame].Position.X.Offset

			return ax < bx

		end)



		for i,item in ipairs(row.Items) do

			local frame = item.Frame
			local original = self.Original[frame]

			local currentX = original.Position.X.Offset
			local height = original.Size.Y.Offset

			local nextItem = row.Items[i+1]

			local width

			if nextItem then

				local nextX =
					self.Original[nextItem.Frame].Position.X.Offset

				width =
					nextX
				- currentX
				- self.Gap

			else

				width =
					containerWidth
				- currentX
				- self.RightPadding

			end


			self:Tween(frame,{
				Position = original.Position,
				Size = UDim2.fromOffset(width,height)
			})

		end

	end



	-- bottom items stay at original positions
	for _,item in ipairs(bottomItems) do

		local frame = item.Frame
		local original = self.Original[frame]

		local width =
			containerWidth
		- original.Position.X.Offset
		- self.RightPadding

		self:Tween(frame,{
			Position = original.Position,
			Size = UDim2.fromOffset(width,original.Size.Y.Offset)
		})

	end



	self.Container.Size = self.OriginalContainerSize

end

function Bento:Bind()

	local busy = false

	self.Container:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()

		if busy then return end
		busy = true

		task.defer(function()

			self:Update()

			busy = false

		end)

	end)

end

function syde:MakeResizable(Dragger, Object, MinSize, Callback, LockAspectRatio)
	assert(typeof(Dragger) == "Instance" and Dragger:IsA("GuiObject"), "[MakeResizable] Dragger must be a GuiObject")
	assert(typeof(Object) == "Instance" and Object:IsA("GuiObject"), "[MakeResizable] Object must be a GuiObject")
	assert(typeof(MinSize) == "Vector2", "[MakeResizable] MinSize must be a Vector2")
	assert(Callback == nil or typeof(Callback) == "function", "[MakeResizable] Callback must be a function or nil")

	local userInput = game:GetService("UserInputService")

	local startPosition, startSize = nil, nil
	local isResizing = false

	-- helper for both mouse and touch
	local function getInputPos(input)
		if input.UserInputType == Enum.UserInputType.Touch then
			return Vector2.new(input.Position.X, input.Position.Y)
		else
			return userInput:GetMouseLocation()
		end
	end

	local function onInputBegan(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
			isResizing = true
			resizing = true
			startPosition = getInputPos(input)
			startSize = Object.AbsoluteSize
			tweenservice:Create(Library.main.resize, TweenInfo.new(0.3, Enum.EasingStyle.Quart), {Size = UDim2.new(0, 15,0, 15)}):Play()
			tweenservice:Create(Library.main.resize, TweenInfo.new(0.3, Enum.EasingStyle.Quart), {ImageColor3 = Color3.fromRGB(255, 255, 255)}):Play()
		end
	end

	local function onInputChanged(input)
		if isResizing and (input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch) then
			local mouse = getInputPos(input)
			if startPosition and mouse then
				local delta = mouse - startPosition

				local newWidth = math.max(MinSize.X, startSize.X + delta.X)
				local newHeight = math.max(MinSize.Y, startSize.Y + delta.Y)

				if LockAspectRatio then
					local aspectRatio = startSize.X / startSize.Y
					newHeight = newWidth / aspectRatio
				end

				Object:TweenSize(
					UDim2.fromOffset(newWidth, newHeight),
					Enum.EasingDirection.Out,
					Enum.EasingStyle.Quint,
					0.4,
					true
				)

				if Callback then
					Callback(Vector2.new(newWidth, newHeight))
				end
			end
		end
	end

	local function onInputEnded(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
			isResizing = false
			resizing = false
			startPosition, startSize = nil, nil
			tweenservice:Create(Library.main.resize, TweenInfo.new(0.3, Enum.EasingStyle.Quart), {Size = UDim2.new(0, 20,0, 20)}):Play()
			tweenservice:Create(Library.main.resize, TweenInfo.new(0.3, Enum.EasingStyle.Quart), {ImageColor3 = Color3.fromRGB(53, 53, 53)}):Play()
		end
	end

	syde:AddConnection(Dragger.InputBegan, onInputBegan)
	syde:AddConnection(userInput.InputChanged, onInputChanged)
	syde:AddConnection(Dragger.InputEnded, onInputEnded)
end


local loadTweens = {}

function syde:registerLoadTween(object, properties, initialState, tweenInfo)
	assert(typeof(object) == "Instance", "[registerLoadTween] Object must be an Instance")
	assert(typeof(properties) == "table", "[registerLoadTween] Properties must be a table")
	assert(typeof(initialState) == "table", "[registerLoadTween] Initial state must be a table")
	assert(typeof(tweenInfo) == "TweenInfo", "[registerLoadTween] TweenInfo must be of type TweenInfo")

	loadTweens[object] = {
		tween = tweenservice:Create(object, tweenInfo, properties),
		properties = properties,
		initialState = initialState,
		tweenInfo = tweenInfo
	}
end

function syde:resetToInitialState(animated, resetTweenInfo)
	for object, tweenData in pairs(loadTweens) do
		if object and object.Parent then
			tweenData.tween:Cancel()

			if animated then
				local resetTween = tweenservice:Create(object, resetTweenInfo or TweenInfo.new(0.3), tweenData.initialState)
				resetTween:Play()
				resetTween.Completed:Wait()
			else

				for property, value in pairs(tweenData.initialState) do
					object[property] = value
				end
			end
		end
	end
end

function syde:replayLoadTweens(targetObject)
	syde:resetToInitialState(false)

	for object, tweenData in pairs(loadTweens) do
		if object and object.Parent then
			if not targetObject or object == targetObject then
				tweenData.tween:Cancel()
				tweenData.tween:Play()
			end
		end
	end
end

function syde:removeLoadTween(object)
	if loadTweens[object] then
		loadTweens[object].tween:Cancel()
		loadTweens[object] = nil
	end
end

local RunService = game:GetService("RunService")

function syde:WiggleText(label)
	if not label or not label:IsA("TextLabel") then return end
	if not label.Text or label.Text == "" then return end

	-- Remove old animation
	if label:FindFirstChild("WiggleContainer") then
		label.WiggleContainer:Destroy()
	end

	local container = Instance.new("Folder")
	container.Name = "WiggleContainer"
	container.Parent = label

	-- Hide original label text
	label.TextTransparency = 1

	local baseText = label.Text:gsub("<.->", "") -- remove RichText tags
	local fontFace = label.FontFace
	local baseSize = label.TextSize
	local textColor = label.TextColor3

	local chars = {}
	local xOffset = 0

	-- Create a label for each character
	for i = 1, #baseText do
		local char = baseText:sub(i, i)
		local charLabel = Instance.new("TextLabel")
		charLabel.BackgroundTransparency = 1
		charLabel.Text = char
		charLabel.TextColor3 = textColor
		charLabel.TextSize = baseSize
		charLabel.FontFace = fontFace
		charLabel.TextXAlignment = Enum.TextXAlignment.Left
		charLabel.TextYAlignment = Enum.TextYAlignment.Center
		charLabel.AnchorPoint = Vector2.new(0, 0.5)
		charLabel.Position = UDim2.new(0, xOffset, 0.5, 0)
		charLabel.Parent = container
		charLabel.ZIndex = 99

		xOffset += charLabel.TextBounds.X
		table.insert(chars, charLabel)
	end

	-- Animate characters
	local t = 0
	local id = "Wiggle_" .. tostring(math.random(1, 999999))
	RunService:BindToRenderStep(id, Enum.RenderPriority.First.Value, function(dt)
		t += dt * 6
		for i, charLabel in ipairs(chars) do
			local offset = math.sin(t + i * 0.3) * 3 -- wiggle amplitude
			charLabel.Position = UDim2.new(0, charLabel.Position.X.Offset, 0.5, offset)
		end
	end)

	label.Destroying:Connect(function()
		RunService:UnbindFromRenderStep(id)
	end)
end


function syde:StopWiggle(label)
	for i, data in ipairs(self.Connections) do
		if data.label == label then
			data.conn:Disconnect()
			table.remove(self.Connections, i)
			break
		end
	end
end



function syde:updateLayout(container, spacing)
	spacing = spacing or 5
	local yOffset = 0
	local containerWidth = container.AbsoluteSize.X 

	for _, v in ipairs(container:GetChildren()) do
		if v:IsA('UIListLayout') then
			v:Destroy()
		end
	end

	if resizing == false then
		for _, child in ipairs(container:GetChildren()) do
			if (child:IsA("Frame") or child:IsA("ImageLabel") or child:IsA("TextLabel") or child:IsA("TextButton")) and child.Visible then
				--child.Size = UDim2.new(1, -10, 0, child.Size.Y.Offset) -- Full width, fixed height
				-- child.Position = UDim2.new(0, 0, 0, yOffset)
				tweenservice:Create(child, TweenInfo.new(0.45, Enum.EasingStyle.Exponential), {Position = UDim2.new(0, 0, 0, yOffset)}):Play()
				yOffset = yOffset + child.AbsoluteSize.Y + spacing
			end
		end
	end


	container.CanvasSize = UDim2.new(0, 0, 0, yOffset)
end

local dragSpeed = 0.6
local LockToScreen = false

function syde:AddDrag(Object, Main, ConstrainToParent)
	assert(typeof(Object) == "Instance" and Object:IsA("GuiObject"), "[AddDrag] Object must be a GuiObject")
	assert(typeof(Main) == "Instance" and Main:IsA("GuiObject"), "[AddDrag] Main must be a GuiObject")

	local userInput = game:GetService("UserInputService")
	local tweenService = game:GetService("TweenService")

	local dragging, dragInput, startMousePos, startFramePos = false, nil, nil, nil

	local function getConstrainedPosition(newPos)
		if not LockToScreen then
			return newPos
		end

		local screenSize = workspace.CurrentCamera.ViewportSize
		local frameSize = Main.AbsoluteSize
		local anchorPoint = Main.AnchorPoint

		-- Calculate the absolute position based on newPos
		local absX = newPos.X.Offset
		local absY = newPos.Y.Offset

		local minX = 0 + (frameSize.X * anchorPoint.X)
		local maxX = screenSize.X - (frameSize.X * (1 - anchorPoint.X))

		local minY = 0 + (frameSize.Y * anchorPoint.Y)
		local maxY = screenSize.Y - (frameSize.Y * (1 - anchorPoint.Y))

		local clampedX = math.clamp(absX, minX, maxX)
		local clampedY = math.clamp(absY, minY, maxY)

		return UDim2.new(0, clampedX, 0, clampedY)
	end

	local function getInputPos(input)
		if input.UserInputType == Enum.UserInputType.Touch then
			return Vector2.new(input.Position.X, input.Position.Y)
		else
			return userInput:GetMouseLocation()
		end
	end




	syde:AddConnection(Object.InputBegan, function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
			dragging = true
			startMousePos = getInputPos(input)

			local screenSize = workspace.CurrentCamera.ViewportSize
			local absX = screenSize.X * Main.Position.X.Scale + Main.Position.X.Offset
			local absY = screenSize.Y * Main.Position.Y.Scale + Main.Position.Y.Offset

			Main.Position = UDim2.new(0, absX, 0, absY)
			startFramePos = Main.Position
		end
	end)


	syde:AddConnection(userInput.InputChanged, function(input)
		if dragging and (input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch) then
			local currentMousePos = getInputPos(input)
			if currentMousePos and startMousePos then
				local delta = currentMousePos - startMousePos

				local newPos = UDim2.new(
					startFramePos.X.Scale, startFramePos.X.Offset + delta.X,
					startFramePos.Y.Scale, startFramePos.Y.Offset + delta.Y
				)

				Main:TweenPosition(getConstrainedPosition(newPos), Enum.EasingDirection.Out, Enum.EasingStyle.Quint, dragSpeed, true)
			end
		end
	end)

	syde:AddConnection(Object.InputEnded, function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
			dragging = false
		end
	end)
end

function syde:HidePlaceHolder(instance, placeholder, recursive)
	if typeof(instance) ~= "Instance" or type(placeholder) ~= "string" then
		warn("[removeplaceholder] Invalid input: Expected (Instance, string)")
		return
	end

	local target = instance:FindFirstChild(placeholder)

	if not target then
		warn(("[removeplaceholder] Placeholder '%s' not found in instance '%s'"):format(placeholder, instance.Name))
		return
	end

	if target:IsA("GuiObject") then
		target.Visible = false
	else
		warn(("[removeplaceholder] '%s' is not a GuiObject and cannot be hidden"):format(placeholder))
		return
	end

	if recursive then
		for _, child in ipairs(target:GetDescendants()) do
			if child:IsA("GuiObject") then
				child.Visible = false
			end
		end
	end
end

local rs
local ss
local mh = true


--@Loader
do

	function syde:Load(Config)
		task.wait(1)
		print('[SYED] Loader Loaded')
		local LOADER = Loader
		LOADER.Enabled = true
		LOADER.Parent = coregui

		-- PreLoad
		Config.Name = Config.Name or 'Syde™'
		Config.Logo = Config.Logo or 'rbxassetid://14554547135'
		Config.ConfigFolder = Config.ConfigFolder or 'syde'
		Config.Status = Config.Status or false
		Config.Accent = Config.Accent or syde.theme.Accent
		Config.HitBox = Config.HitBox or syde.theme.HitBox

		LOADER.loader.profile.Title.TextTransparency = 1
		LOADER.loader.profile.ImageTransparency = 1
		LOADER.loader.profile.Title.Text = Config.Name
		--	LOADER.load.logo.stroke.UIStroke.Transparency = 1

		local LoaderConfig = {
			Name = Config.Name;
			Logo = 'rbxassetid://'..Config.Logo;
			ConfigFolder = Config.ConfigFolder;
			Status = Config.Status;
			Accent = Config.Accent or syde.theme.Accent;
			Hitbox = Config.HitBox or syde.theme.HitBox;
			Socials = {}
		}

		if LoaderConfig.Status == false then
			--	LOADER.load.logo.stroke.UIStroke.Color = Color3.fromRGB(24, 24, 24)
			LOADER.loader.profile.Title.Text = LoaderConfig.Name
		end

		local statusColors = {
			Stable = { Color = Color3.fromRGB(25, 229, 22), Text = '<font color="#24bf48">Stable</font>' },
			Unstable = { Color = Color3.fromRGB(227, 229, 81), Text = '<font color="#e3e551">Unstable</font>' },
			Detected = { Color = Color3.fromRGB(229, 44, 47), Text = '<font color="#e52c2f">Detected</font>' },
			Patched = { Color = Color3.fromRGB(229, 229, 229), Text = '<font color="#e52c2f">Patched</font>' }
		}

		local statusData = statusColors[LoaderConfig.Status]
		if statusData then
			LOADER.loader.profile.status.BackgroundColor3 = statusData.Color
			--	LOADER.load.logo["Title/Status"].Text = string.format('%s  <font color="#363636">•</font>  %s', LoaderConfig.Name, statusData.Text)
		end

		LOADER.loader.profile.Image = LoaderConfig.Logo;
		LOADER.loader.ImageLabel.Image = LoaderConfig.Logo;
		--	LOADER.load.info.build.Text = syde.Build

		local ti = TweenInfo.new(0.5, Enum.EasingStyle.Exponential)

		task.spawn(function()
			while LOADER and LOADER.Parent do
				task.wait()

				local loaderFrame = LOADER:FindFirstChild("loader")
				if not loaderFrame then break end

				local dots = loaderFrame:FindFirstChild("dots")
				if not dots then break end

				local function resetDots()
					for _, v in ipairs(dots:GetChildren()) do
						if v:IsA("Frame") then
							tweenservice:Create(v, ti, {BackgroundTransparency = 0.6}):Play()
						end
					end
				end

				-- 1

				if dots:FindFirstChild("dot1") then
					tweenservice:Create(dots.dot1, ti, {BackgroundTransparency = 0}):Play()
				end
				task.wait(0.5)
				resetDots()


				-- 2
				if dots:FindFirstChild("dot3") then
					tweenservice:Create(dots.dot3, ti, {BackgroundTransparency = 0}):Play()
				end
				task.wait(0.5)
				resetDots()


				-- 3
				if dots:FindFirstChild("dot2") then
					tweenservice:Create(dots.dot2, ti, {BackgroundTransparency = 0}):Play()
				end
				task.wait(0.5)
				resetDots()

			end
		end)


		local TweenWorkPos = 315
		local TweenWorkAppear = 287
		local TweenWorkDisappear = 270

		local Styles = {
			GitHub = {
				BackGroundColor = Color3.fromRGB(39, 39, 39);
				--	GradColor = ColorSequence.new{ColorSequenceKeypoint.new(0.00, Color3.fromRGB(255, 255, 255)), ColorSequenceKeypoint.new(1.00, Color3.fromRGB(129, 129, 129))};
				StrokeColor = Color3.fromRGB(39, 39, 39);
				Icon = 'rbxassetid://112129825794851'
			},
			Discord = {
				BackGroundColor = Color3.fromRGB(88, 141, 255);
				--	GradColor = ColorSequence.new{ColorSequenceKeypoint.new(0.00, Color3.fromRGB(255, 255, 255)), ColorSequenceKeypoint.new(1.00, Color3.fromRGB(91, 125, 147))};
				StrokeColor = Color3.fromRGB(88, 141, 255);
				Icon = 'rbxassetid://113723018301753'
			},
			Site = {
				BackGroundColor = Color3.fromRGB(242, 83, 112);
				--	GradColor = ColorSequence.new{ColorSequenceKeypoint.new(0.00, Color3.fromRGB(255, 255, 255)), ColorSequenceKeypoint.new(1.00, Color3.fromRGB(181, 33, 255))};
				StrokeColor = Color3.fromRGB(242, 83, 112);
				Icon = 'rbxassetid://127485237503891'
			}
		}

		local logo = LOADER.loader.profile
		--	local sl = logo.sl
		--	local strokeGradient = logo.stroke.UIStroke.UIGradient

		local loadedsocial = false

		local Socials = Config.Socials or {}
		local maxSocials = 3
		local count = 0


		local SocialTemplate = LOADER.loader.profile.socials.s1

		for platform, value in pairs(Socials) do
			if count >= maxSocials then break end
			if not Styles[platform] then continue end
			if not SocialTemplate then break end

			count += 1

			local clone = SocialTemplate:Clone()
			clone.Visible = true
			clone.Name = platform .. "_Social"
			clone.Parent = SocialTemplate.Parent

			-- Positioning (stack horizontally)
			--	clone.Position = UDim2.new(0, (count - 1) * 110, 1, -40)

			-- Apply Style
			clone.BackgroundColor3 = Styles[platform].BackGroundColor
			clone.ImageLabel.Image = Styles[platform].Icon

			if clone.Frame:FindFirstChild("UIStroke") then
				clone.Frame.UIStroke.Color = Styles[platform].StrokeColor
			end

			-- Set Text (change if your text label has different name)
			if clone:FindFirstChild("Title") then
				clone.Title.Text = value
			end

			clone.interact.MouseButton1Click:Connect(function()
				if value ~= '' then
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Color = Color3.fromRGB(74, 255, 33)}):Play()
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0}):Play()
					task.wait(0.5)
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Color = Styles[platform].BackGroundColor}):Play()
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0.5}):Play()
					print(value)
				else
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Color = Color3.fromRGB(255, 41, 45)}):Play()
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0}):Play()
					task.wait(0.5)
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Color = Styles[platform].BackGroundColor}):Play()
					tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0.5}):Play()
				end

				setclipboard(value)
			end)

			clone.MouseEnter:Connect(function()
				tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0.5}):Play()
			end)
			clone.MouseLeave:Connect(function()
				tweenservice:Create(clone.Frame.UIStroke, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Transparency = 0}):Play()
			end)

			loadedsocial = true
		end

		tweenservice:Create(logo, TweenInfo.new(1, Enum.EasingStyle.Exponential), {ImageTransparency = 0}):Play()
		--	tweenservice:Create(logo, TweenInfo.new(1, Enum.EasingStyle.Quint), {Position = UDim2.new(0.5, 0,0, 105)}):Play()

		tweenservice:Create(logo.Title, TweenInfo.new(2, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
		task.wait(1)


		--	local function initLoader()
		--	tweenservice:Create( LOADER.load.Salt, TweenInfo.new(0.65, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 25,0, 25)}):Play()
		--	tweenservice:Create( LOADER.load.Salt, TweenInfo.new(0.65, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
		--	end

		local function TweenWorkLabel(Finish, icon, Text)
			LOADER.loader.work.Position = UDim2.new(0.5, 0,1, -40)
			LOADER.loader.work.Text = Text
			LOADER.loader.work.ImageLabel.Image = icon
			tweenservice:Create( LOADER.loader.work, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
			tweenservice:Create( LOADER.loader.work.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 0 }):Play()
			tweenservice:Create( LOADER.loader.work, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { Position = UDim2.new(0.5, 0,1, -73) }):Play()
			--	tweenservice:Create(game.Workspace.Camera, TweenInfo.new(1, Enum.EasingStyle.Exponential), { FieldOfView  = game.Workspace.Camera.FieldOfView - 3 }):Play()
			task.wait(Finish)
			tweenservice:Create(LOADER.loader.work, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
			tweenservice:Create( LOADER.loader.work.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
			tweenservice:Create( LOADER.loader.work, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { Position = UDim2.new(0.5, 0,1, -100) }):Play()
			task.wait(0.6)

			-- reset

		end

		local function load()
			TweenWorkLabel(1,'rbxassetid://136002400178503', '')

			if Config.ConfigurationSaving and Config.ConfigurationSaving.Enabled then
				local folderName = Config.ConfigurationSaving.FolderName or "SydeSec"
				local fileName = Config.ConfigurationSaving.FileName or "default_config"
				local fullPath = folderName .. "/" .. fileName .. ".lua"

				syde.ConfigEnabled = true
				syde.ConfigFolder = folderName  
				syde.ConfigFile = fileName     

				-- Ensure folder exists
				if isfolder and not isfolder(folderName) then
					local success, err = pcall(function()
						makefolder(folderName)
					end)
					if not success then
						warn("[SYDE] Failed to create folder:", err)
					end
				end

				-- File validation
				local success, err = pcall(function()
					if isfile and not isfile(fullPath) then
						writefile(fullPath, "-- Protected UI Configuration")
					else
						local content = readfile(fullPath)
					end
				end)

				if not success then
					warn("[SYDE] File write/read blocked or failed:", err)
				end
			end


			TweenWorkLabel(1,'rbxassetid://105810189969774', '')

			local UI_TAG = "sydeUILoader"
			local MARKER_NAME = "SYDEUIDetector"
			local INTERNAL_UUID = ("SYDE-" .. tostring(game.JobId):gsub("-", "") .. tostring(tick())):gsub("%.", "")
			local PROTECTION_EVENT = Instance.new("BindableEvent")
			local HttpService = game:GetService("HttpService")


			-- Cleanup old UI 
			local function deepCleanup()
				for _, v in ipairs(coregui:GetChildren()) do
					if v:IsA("ScreenGui") and v:FindFirstChild(MARKER_NAME) then
						pcall(function()
							v:Destroy()
						end)
					end
				end
			end
			deepCleanup()

			-- Load the Library
			local successLibrary, Library = pcall(function()
				return Library -- Replace with actual GetObjects if needed
			end)

			if not successLibrary or not Library then
				warn("[SYDE] Failed to load Library.")
				return
			end

			Library.Name = UI_TAG
			Library.ResetOnSpawn = false

			local marker = Instance.new("StringValue")
			marker.Name = MARKER_NAME
			marker.Value = INTERNAL_UUID
			marker.Parent = Library

			pcall(function()
				Library.Parent = coregui
			end)

			-- Ensure Library stays in CoreGui
			task.spawn(function()
				while Library and Library.Parent do
					task.wait(1)
					if Library.Parent ~= coregui then
						warn("Syde 〡 UI moved. Restoring...")
						pcall(function()
							Library.Parent = coregui
						end)
					end
				end
			end)

			TweenWorkLabel(1,'rbxassetid://108012241529487', '')


			if Config.AutoJoinDiscord and Config.AutoJoinDiscord.Enabled then
				local discordConfig = Config.AutoJoinDiscord
				local rootFolder = Config.ConfigurationSaving and Config.ConfigurationSaving.FolderName or "SydeSec"
				local discordFolder = rootFolder .. "/DiscordInvites"
				local inviteCode = discordConfig.Invite
				local inviteFilePath = discordFolder .. "/" .. inviteCode .. ".txt"

				warn("[SYDE] Discord AutoJoin enabled. Preparing to send invite:", inviteCode)

				-- Ensure folder exists
				if isfolder and not isfolder(discordFolder) then
					local folderSuccess, folderErr = pcall(function()
						makefolder(discordFolder)
					end)
					if folderSuccess then
						print("[SYDE] Created DiscordInvites folder at:", discordFolder)
					else
						warn("[SYDE] Failed to create DiscordInvites folder:", folderErr)
					end
				end

				local shouldPrompt = true
				if isfile and discordConfig.RememberJoins and isfile(inviteFilePath) then
					print("[SYDE] Discord invite '" .. inviteCode .. "' already joined. Skipping prompt.")
					shouldPrompt = false
				end

				if shouldPrompt then
					if request then
						local reqSuccess, reqErr = pcall(function()
							request({
								Url = "http://127.0.0.1:6463/rpc?v=1",
								Method = "POST",
								Headers = {
									["Content-Type"] = "application/json",
									["Origin"] = "https://discord.com"
								},
								Body = https:JSONEncode({
									cmd = "INVITE_BROWSER",
									nonce = https:GenerateGUID(false),
									args = {
										code = inviteCode
									}
								})
							})
						end)

						if reqSuccess then
							print("[SYDE] Discord invite sent successfully to:", inviteCode)
						else
							warn("[SYDE] Failed to send Discord invite:", reqErr)
						end
					else
						warn("[SYDE] Request function not available — cannot send Discord invite.")
					end

					if discordConfig.RememberJoins then
						local writeSuccess, writeErr = pcall(function()
							writefile(inviteFilePath, "Joined Discord via invite '" .. inviteCode .. "' at " .. os.date())
						end)

						if writeSuccess then
							print("[SYDE] Logged Discord invite join for:", inviteCode)
						else
							warn("[SYDE] Failed to write join log for invite:", writeErr)
						end
					end
				end
			end

			TweenWorkLabel(1,'rbxassetid://136405833725573', '')
			task.wait(1)
			loaded = true
			--	tweenservice:Create( LOADER.load.Salt, TweenInfo.new(0.65, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 146,0, 25)}):Play()
			--	tweenservice:Create( LOADER.load.Salt.ImageLabel, TweenInfo.new(0.65, Enum.EasingStyle.Exponential), {ImageTransparency = 0}):Play()
		end

		--	initLoader()
		task.wait(0.08)
		load()

		task.wait(2)

		--	Library.Enabled = true
		syde.theme.Accent = Config.Accent;
		syde.theme.HitBox = Config.HitBox;
		LOADER:Destroy()

	end

end

local HttpService = https
local CONFIG_VERSION = 1

local SaveDebounce
local SAVE_DELAY = 0.2

local function SafeDecode(data)
	local success, result = pcall(function()
		return HttpService:JSONDecode(data)
	end)
	return success and result or nil
end

local function ApplyFlag(Flag, Value)
	if Value == nil then return false end

	-- ColorPicker Handling
	if Flag.Type == "ColorPicker" then
		local unpacked = syde:ColorUnpack(Value)

		if Flag.Set then
			Flag:Set(unpacked)
		elseif Flag.Color then
			Flag.Color = unpacked
		end

		return true
	end

	-- Standard Setter
	if Flag.Set then
		Flag:Set(Value)
		return true
	end

	-- Raw Value fallback
	if Flag.V ~= nil then
		Flag.V = Value
		return true
	end

	if Flag.StarterValue ~= nil then
		Flag.StarterValue = Value
		return true
	end

	warn("Syde 〡 Unsupported flag type for:", Flag)
	return false
end

function LoadConfig(Configuration)
	if type(Configuration) ~= "string" then
		warn("Syde 〡 Invalid config format.")
		return false
	end

	local Decoded = SafeDecode(Configuration)
	if not Decoded then
		warn("Syde 〡 Failed to decode config.")
		return false
	end

	-- Version check (future ready)
	if Decoded._version and Decoded._version ~= CONFIG_VERSION then
		warn("Syde 〡 Config version mismatch.")
	end

	local changed = false

	for FlagName, Flag in pairs(syde.Flags) do
		local SavedValue = Decoded[FlagName]

		if SavedValue ~= nil then
			local success = ApplyFlag(Flag, SavedValue)
			if success then
				changed = true
			end
		end

		print("Loading Flag:", FlagName, "Value:", SavedValue)
	end

	return changed
end

-- Internal Save Logic
local function PerformSave()
	if not syde.ConfigEnabled then return end
	if not writefile then return end

	local Data = {
		_version = CONFIG_VERSION
	}

	for FlagName, Flag in pairs(syde.Flags) do
		if Flag.Type == "ColorPicker" then
			Data[FlagName] = syde:ColorPack(Flag.Color)
		else
			Data[FlagName] =
				Flag.V ~= nil and Flag.V
				or Flag.Color
				or Flag.StarterValue
				or false
		end
	end

	-- Ensure folder exists
	if makefolder and not isfolder(syde.ConfigFolder) then
		makefolder(syde.ConfigFolder)
	end

	local path = string.format("%s/%s.json", syde.ConfigFolder, syde.ConfigFile)

	local success, err = pcall(function()
		writefile(path, HttpService:JSONEncode(Data))
	end)

	if not success then
		warn("Syde 〡 Failed to save config:", err)
	end
end

-- Public Save (Debounced)
function SaveConfig()
	if SaveDebounce then
		task.cancel(SaveDebounce)
	end

	SaveDebounce = task.delay(SAVE_DELAY, PerformSave)
end


--@UiSetup
local ui = Library
local window = ui.main
local top = window.top
local tabs = window.tabs.tab
local pages = window.pages

--

local Connected = false
local settingsOpen = false
local pluginsOpen = false
local uiclosed = false
local userinfodisabled = false
local intro = false
local bluron = false
local glow = false

local uitoggle = Enum.KeyCode.RightShift
--

function applyLayout(isMobile)
	--	Library.lib.Size = isMobile and UDim2.new(0, 543,0, 321) or UDim2.new(0, 715, 0, 575)
	tweenservice:Create(Library.main, TweenInfo.new(0.4, Enum.EasingStyle.Quint), {Size = isMobile and UDim2.new(0, 543,0, 321) or UDim2.new(0, 715, 0, 575)}):Play()
	local shadow = window:FindFirstChild("Shadow")
	if shadow then
		shadow.Visible = not isMobile 
	end
end


local function updateLayout()
	local screenSize = camera.ViewportSize
	local mobile = userinput.TouchEnabled
	applyLayout(mobile)
end

--@@Notification
local notifications = {}
local notificationSpacing = 10

local tweenInfo = TweenInfo.new(0.7, Enum.EasingStyle.Exponential, Enum.EasingDirection.Out)

function updatePositions()
	local screenHeight = workspace.CurrentCamera.ViewportSize.Y - 200
	local currentY = screenHeight

	for i = #notifications, 1, -1 do
		local notif = notifications[i]
		local targetPosition = UDim2.new(0, 250, 0, currentY - notif.Size.Y.Offset + 60) 
		tweenservice:Create(notif, tweenInfo, { Position = targetPosition }):Play()
		currentY = currentY - (notif.Size.Y.Offset + notificationSpacing)
	end
end

for _, temp in ipairs(Library.Notification:GetChildren()) do
	if temp:IsA("Frame") then
		temp.Visible = false
	end
end 

function syde:Notify(Notification)
	task.spawn(function()

		local NotifData = {
			Title = Notification.Title;
			Content = Notification.Content;
			Duration = Notification.Duration or 5;
			Icon = Notification.Icon or '';
			Varient = Notification.Varient or 'Default';
			Animation = Notification.Animation ;
			ConfirmCallback = Notification.ConfirmCallback
		}



		local Notification = Library.Notification.Default:Clone()
		Notification.Visible = true
		Notification.Parent = Library.Notification
		Notification.Title.Text = NotifData.Title
		Notification.Content.Text = NotifData.Content
		Notification.Content.Size = UDim2.new(0, 200,0, Notification.Content.TextBounds.Y )
		Notification.icon.Image = 'rbxassetid://'..NotifData.Icon
		print(NotifData.Icon)
		Notification.icon.Visible = true



		local function CloseNotif()

			if Notification and Notification.Parent then
				table.remove(notifications, table.find(notifications, Notification))
				tweenservice:Create(Notification.UIScale, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {Scale = 0.9}):Play()
				tweenservice:Create(Notification.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {ImageTransparency = 0.95}):Play()
				tweenservice:Create(Notification, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0.75}):Play()
				--	tweenservice:Create(Notification.Title, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0.5}):Play()
				tweenservice:Create(Notification.Content, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0.78}):Play()

				task.wait(0.15)

				tweenservice:Create(Notification, TweenInfo.new(0.95, Enum.EasingStyle.Exponential), {Position = UDim2.new(0, Notification.Position.X.Offset + 400, 0, Notification.Position.Y.Offset) }):Play()
				task.wait(0.4)
				Notification:Destroy()
				updatePositions()
			end

		end

		if NotifData.Animation == 'Wiggle' then
			syde:WiggleText(Notification.Title)
		end

		if NotifData.Varient == 'Options' then
			Notification.Block.Visible = true
			Notification.Size = UDim2.new(1, 0,0, Notification.Content.TextBounds.Y + 80)
			Notification.Block.Cancel.MouseButton1Click:Connect(function()
				CloseNotif()
			end)
			Notification.Block.Confirm.MouseButton1Click:Connect(function()
				if NotifData.ConfirmCallback then
					NotifData.ConfirmCallback()
					CloseNotif()
				end
			end)
		else
			Notification.Size = UDim2.new(1, 0,0, Notification.Content.TextBounds.Y + 45)
		end


		table.insert(notifications, Notification)
		updatePositions()

		--	Notification.UIScale.Scale = 0.9
		Notification.close.ImageTransparency = 0.95
		Notification.BackgroundTransparency = 0.75
		--	Notification.Title.TextTransparency = 0.5
		Notification.Content.TextTransparency = 0.78

		Notification.Position = UDim2.new(0, 600, 0, 637)



		task.wait(0.45)

		if NotifData.Icon ~= '' then
			tweenservice:Create(Notification.Title, TweenInfo.new(0.5, Enum.EasingStyle.Quint), {Position = UDim2.new(0, 40,0, 10)}):Play()
			task.wait(0.035)
			tweenservice:Create(Notification.Content, TweenInfo.new(0.5, Enum.EasingStyle.Quint), {Position = UDim2.new(0, 40,0, 30)}):Play()

			tweenservice:Create(Notification.icon, TweenInfo.new(1, Enum.EasingStyle.Exponential), {ImageTransparency = 0}):Play()
		end


		tweenservice:Create(Notification.UIScale, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {Scale = 1}):Play()
		tweenservice:Create(Notification.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {ImageTransparency = 0.75}):Play()
		tweenservice:Create(Notification, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
		--	tweenservice:Create(Notification.Title, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
		tweenservice:Create(Notification.Content, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()

		Notification.close.MouseEnter:Connect(function()
			tweenservice:Create(Notification.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {ImageTransparency = 0.25}):Play()
		end)

		Notification.close.MouseLeave:Connect(function()
			tweenservice:Create(Notification.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), {ImageTransparency = 0.75}):Play()
		end)

		Notification.close.MouseButton1Click:Connect(function()
			CloseNotif()
		end)

		task.delay(NotifData.Duration, function()
			CloseNotif()
		end)
	end)
end


--@@Modal
local activeModals = 0 -- track how many modals are currently open

function syde:Modal(Modal)
	task.spawn(function()
		local ModalData = {
			Title = Modal.Title;
			Content = Modal.Content;
			ConfirmCallBack = Modal.ConfimCallBack
		}

		local ModalInstance = ui.main.modal:Clone()
		ModalInstance.Visible = true
		ModalInstance.Parent = ui.main
		ModalInstance.Title.Text = ModalData.Title
		ModalInstance.Content.Text = ModalData.Content
		--	ModalInstance.Content.Size = UDim2.new(1, ModalInstance.Content.Size.X.Offset, 1, ModalInstance.Content.TextBounds.Y)
		ModalInstance.Size = UDim2.new(0, 350,0, 144)
		ModalInstance.BackgroundTransparency = 1
		ModalInstance.Title.TextTransparency = 1
		ModalInstance.Content.TextTransparency = 1

		ModalInstance.Buttons.Confirm.BackgroundTransparency = 1
		ModalInstance.Buttons.Confirm.TextLabel.TextTransparency = 1
		--	ModalInstance.Buttons.Confirm.UIStroke.Transparency = 1

		ModalInstance.Buttons.Cancel.BackgroundTransparency = 1
		ModalInstance.Buttons.Cancel.TextLabel.TextTransparency = 1
		ModalInstance.Buttons.Cancel.UIStroke.Transparency = 1

		local function openModal()
			tweenservice:Create(ModalInstance.Content, TweenInfo.new(0.75, Enum.EasingStyle.Quint), {Size = UDim2.new(1, ModalInstance.Content.Size.X.Offset, 1, ModalInstance.Content.TextBounds.Y)}):Play()
			activeModals += 1
			--	ModalInstance.Size = UDim2.new(0, ModalInstance.Size.X.Offset, 0, ModalInstance.Content.TextBounds.Y + 120)
			tweenservice:Create(ModalInstance, TweenInfo.new(0.65, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 350,0,  ModalInstance.Content.TextBounds.Y + 150)}):Play()

			tweenservice:Create(ModalInstance, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
			tweenservice:Create(ModalInstance.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()
			tweenservice:Create(ModalInstance.Title, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
			tweenservice:Create(ModalInstance.Content, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()

			tweenservice:Create(ModalInstance.Buttons.Confirm, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0.5}):Play()
			tweenservice:Create(ModalInstance.Buttons.Confirm.TextLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
			--	tweenservice:Create(ModalInstance.Buttons.Confirm.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()

			tweenservice:Create(ModalInstance.Buttons.Cancel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1}):Play()
			tweenservice:Create(ModalInstance.Buttons.Cancel.TextLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
			tweenservice:Create(ModalInstance.Buttons.Cancel.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()

		end
		openModal()

		local function closeModal()
			activeModals -= 1
			print(activeModals)
			ModalInstance.Buttons.Cancel.Interactable = false
			ModalInstance.Buttons.Confirm.Interactable = false
			tweenservice:Create(ModalInstance, TweenInfo.new(0.75, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 350,0, 147)}):Play()
			tweenservice:Create(ModalInstance, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1}):Play()
			tweenservice:Create(ModalInstance.Title, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
			tweenservice:Create(ModalInstance.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
			tweenservice:Create(ModalInstance.Content, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()

			tweenservice:Create(ModalInstance.Buttons.Confirm, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1}):Play()
			tweenservice:Create(ModalInstance.Buttons.Confirm.TextLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
			--	tweenservice:Create(ModalInstance.Buttons.Confirm.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()

			tweenservice:Create(ModalInstance.Buttons.Cancel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1}):Play()
			tweenservice:Create(ModalInstance.Buttons.Cancel.TextLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
			tweenservice:Create(ModalInstance.Buttons.Cancel.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
			task.wait(0.45)
			ModalInstance:Destroy()
		end



		if activeModals == 1 then
			ui.main.dim.Visible = true
			tweenservice:Create(ui.main.dim, TweenInfo.new(0.73, Enum.EasingStyle.Exponential), {
				BackgroundTransparency = 0.3
			}):Play()
		end

		ModalInstance.Buttons.Confirm.MouseButton1Click:Connect(function()
			if typeof(ModalData.ConfirmCallBack) == "function" then
				ModalData.ConfirmCallBack()
			end

			closeModal()

			if activeModals == 0 then
				tweenservice:Create(ui.main.dim, TweenInfo.new(0.73, Enum.EasingStyle.Exponential), {
					BackgroundTransparency = 1
				}):Play()
				task.wait(0.7)
				ui.main.dim.Visible = false
			end
		end)

		ModalInstance.Buttons.Cancel.MouseButton1Click:Connect(function()
			closeModal()
			tweenservice:Create(ui.main.dim, TweenInfo.new(0.73, Enum.EasingStyle.Exponential), {
				BackgroundTransparency = 1
			}):Play()
			task.wait(0.7)
			ui.main.dim.Visible = false
		end)

	end)
end


--@@Toast
local toasts = {}
local toastSpacing = 8

local tweenInfo = TweenInfo.new(
	0.55,
	Enum.EasingStyle.Exponential,
	Enum.EasingDirection.Out
)

local function updateToastPositions()
	local startY = 10 -- padding from top of toastholder
	local currentY = startY

	for i = 1, #toasts do
		local toast = toasts[i]
		if toast and toast.Parent then
			local target = UDim2.new(
				0.5, 0,
				0, currentY
			)

			tweenservice:Create(toast, tweenInfo, {
				Position = target
			}):Play()

			currentY += toast.Size.Y.Offset + toastSpacing
		end
	end
end

function syde:Toast(Toasty)
	task.spawn(function()
		local Data = {
			Content = Toasty.Content or "",
			Duration = Toasty.Duration or 5,
			Icon = Toasty.Icon or ""
		}

		local Toast = ui.toastholder.toast:Clone()
		Toast.Visible = true
		Toast.Parent = ui.toastholder
		Toast.AnchorPoint = Vector2.new(0.5, 0)

		-- Content
		Toast.Content.Text = Data.Content
		-- task.wait(0) -- allow TextBounds update

		Toast.Size = UDim2.new(1, Toast.Content.TextBounds.X - 140 ,0, 40)
		--  tweenservice:Create(Toast, TweenInfo.new(0.4, Enum.EasingStyle.Quart), {Size = UDim2.new(1, Toast.Content.TextBounds.X - 140 ,0, 40)}):Play()

		if Data.Icon ~= "" then
			Toast.icon.ImageLabel.Image = "rbxassetid://" .. Data.Icon
			Toast.icon.ImageLabel.ImageTransparency = 0
		end



		-- Spawn ABOVE holder
		Toast.Position = UDim2.new(
			0.5, 0,
			0, -Toast.Size.Y.Offset - 20
		)

		-- Insert at TOP
		table.insert(toasts, 1, Toast)
		updateToastPositions()

		-- Auto remove
		task.delay(Data.Duration, function()
			if not Toast or not Toast.Parent then return end

			table.remove(toasts, table.find(toasts, Toast))

			tweenservice:Create(
				Toast,
				TweenInfo.new(0.4, Enum.EasingStyle.Exponential),
				{
					Position = Toast.Position - UDim2.fromOffset(0, 30),
					BackgroundTransparency = 1
				}
			):Play()

			for _, v in ipairs(Toast:GetDescendants()) do
				if v:IsA("TextLabel") then
					tweenservice:Create(v, TweenInfo.new(0.3), {
						TextTransparency = 1
					}):Play()
				elseif v:IsA("ImageLabel") then
					tweenservice:Create(v, TweenInfo.new(0.3), {
						ImageTransparency = 1
					}):Play()
				elseif v:IsA("Frame") then
					tweenservice:Create(v, TweenInfo.new(0.3), {
						BackgroundTransparency = 1
					}):Play()
				end
			end

			task.wait(0.35)
			Toast:Destroy()
			updateToastPositions()
		end)
	end)
end



--@SetupFunctionst
function SetUserInfo()
	print('set')
	local LocalPlayer = player.LocalPlayer

	local PLACEHOLDER_IMAGE = "rbxassetid://0" 
	local THUMBNAIL_TYPE = Enum.ThumbnailType.HeadShot
	local THUMBNAIL_SIZE = Enum.ThumbnailSize.Size420x420

	local imageLabel = window:WaitForChild("user"):WaitForChild("headshot")
	imageLabel.Image = PLACEHOLDER_IMAGE

	local success, thumbnail = pcall(function()
		return player:GetUserThumbnailAsync(LocalPlayer.UserId, THUMBNAIL_TYPE, THUMBNAIL_SIZE)
	end)

	if success and thumbnail then
		imageLabel.Image = thumbnail
		window.user.headshot.id.username.Text = LocalPlayer.Name
		window.user.headshot.id.displayname.Text = "@"..LocalPlayer.DisplayName
	else
		imageLabel.Image = PLACEHOLDER_IMAGE
	end
end

--@ Toggle Search
local searchopen = false

function opensearch()
	searchopen = true
	window.dim.Visible = true
	window.search.Visible = true
	window.search.Container.Visible = true
	window.search.Visible = true


	if window.search.Frame.TextBox.Text ~= '' then
		tweenservice:Create(window.search, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { Size = UDim2.new(0, 350,0, 230) }):Play()
	else
		tweenservice:Create(window.search, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { Size = UDim2.new(0, 350,0, 60) }):Play()
	end

	tweenservice:Create(window.dim, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.45 }):Play()
	tweenservice:Create(window.search, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0 }):Play()
	tweenservice:Create(window.search.Frame.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 0 }):Play()

	tweenservice:Create(window.search.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0 }):Play()
	tweenservice:Create(window.search.close.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 0 }):Play()

	tweenservice:Create(window.search.Frame.TextBox, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
end

function closesearch()
	searchopen = false
	window.search.Container.Visible = false
	tweenservice:Create(window.search, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { Size = UDim2.new(0, 350,0, 60) }):Play()
	tweenservice:Create(window.dim, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
	tweenservice:Create(window.search, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1}):Play()
	tweenservice:Create(window.search.Frame.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()

	tweenservice:Create(window.search.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1}):Play()
	tweenservice:Create(window.search.close.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()

	tweenservice:Create(window.search.Frame.TextBox, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
	task.wait(0.5)
	window.dim.Visible = false
	window.search.Visible = false
end

--@ ToggleUI

function openui()
	pages.Visible = true
	window.tabs.Visible = true
	window.user.Visible = true
	window.Visible = true
	uiclosed = false

	if bluron then
		syde:BindFrame(window, {
			Transparency = 0.98;
			BrickColor = BrickColor.new('Institutional white');
		})
		tweenservice:Create(window, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0.45 }):Play()
	else
		tweenservice:Create(window, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0 }):Play()
	end
	tweenservice:Create(window, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 700,0, 560) }):Play()

	tweenservice:Create(window.top.separator, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0 }):Play()
	tweenservice:Create(window.top.title, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextTransparency = 0 }):Play()
	tweenservice:Create(window.top.title.sub, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextTransparency = 0 }):Play()

	tweenservice:Create(window.top.functions, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0 }):Play()

	if window.wallpaper.ison.Value  then
		tweenservice:Create(window.wallpaper, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 0.84 }):Play()
	end


	for i,v in pairs(window.top.functions:GetChildren()) do
		if v:IsA("Frame") then
			tweenservice:Create(v, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0.8 }):Play()
			v.Visible = true
			for i,v2 in pairs(v:GetChildren()) do
				if v2:IsA("ImageLabel") then
					tweenservice:Create(v2, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 0 }):Play()
					v2.Visible = true
				end
			end
			if v:FindFirstChild("rainbow") then
				tweenservice:Create(v.rainbow, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 1 }):Play()
			end

		end
	end

	tweenservice:Create(window.shadow.ImageLabel, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 0.5 }):Play()
	tweenservice:Create(window.resize, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 0.3}):Play()

	if glow == true then
		for i, glow in pairs(window.clipframe:GetChildren()) do
			if glow:IsA("ImageLabel") then
				tweenservice:Create(glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 0.8}):Play()
			end
		end

		tweenservice:Create(window.shadow.glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 0.9}):Play()
		tweenservice:Create(window.shadow.glow1, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 0.9}):Play()
	end


end

function closeui()
	pages.Visible = false
	window.tabs.Visible = false
	window.user.Visible = false

	tweenservice:Create(window, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1 }):Play()
	tweenservice:Create(window, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {Size = UDim2.new(window.Size.X.Scale, window.Size.X.Offset, window.Size.Y.Scale, 200) }):Play()

	tweenservice:Create(window.top.separator, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1 }):Play()
	tweenservice:Create(window.top.title, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextTransparency = 1 }):Play()
	tweenservice:Create(window.top.title.sub, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextTransparency = 1 }):Play()

	if window.wallpaper.ison.Value  then
		tweenservice:Create(window.wallpaper, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 1 }):Play()
	end


	syde:UnbindFrame(window)


	tweenservice:Create(window.top.functions, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1 }):Play()
	for i,v in pairs(window.top.functions:GetChildren()) do
		if v:IsA("Frame") then
			tweenservice:Create(v, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1 }):Play()
			v.Visible = false
			for i,v2 in pairs(v:GetChildren()) do
				if v2:IsA("ImageLabel") then
					tweenservice:Create(v2, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 1 }):Play()
					v2.Visible = false
				end
			end
		end
	end

	for i, glow in pairs(window.clipframe:GetChildren()) do
		if glow:IsA("ImageLabel") then
			tweenservice:Create(glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 1}):Play()
		end
	end

	tweenservice:Create(window.shadow.glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 1}):Play()
	tweenservice:Create(window.shadow.glow1, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 1}):Play()

	tweenservice:Create(window.shadow.ImageLabel, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 1 }):Play()
	tweenservice:Create(window.resize, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {ImageTransparency = 1 }):Play()

	closesettings()
	closesearch()
	settingsOpen = false



	--task.wait(0.5)

	window.Visible = false
	uiclosed = true
	syde:Toast({
		Content = 'UI Hidden, Use '.. uitoggle.Name ..' To Open Back.',
		Duration = 2,
	})


end

local bounce = false

function ToggleUI()
	if bounce then return end
	bounce = true

	if uiclosed then
		--	task.wait(0.2)
		print('open')
		openui()

		workspace.CurrentCamera:GetPropertyChangedSignal("ViewportSize"):Connect(function()
			screenSize = workspace.CurrentCamera.ViewportSize
			isMobile = userinput.TouchEnabled
			updateLayout()
		end)

		updateLayout()

		camera:GetPropertyChangedSignal("ViewportSize"):Connect(updateLayout)
		userinput:GetPropertyChangedSignal("TouchEnabled"):Connect(updateLayout)
	else
		closeui()
		print('close')
	end

	task.delay(0.2, function()
		bounce = false
	end)
end

window.top.functions.close.interact.MouseButton1Click:Connect(function()
	syde:Modal({
		Title = 'Please Confirm Below.',
		Content = 'Are You Sure You Want To Close This UI?',
		ConfimCallBack = function()
			mh = false
			rs:Disconnect()
			ss:Disconnect()
			--	if not ui.Parent then return end
			task.wait(1)
			Library:Destroy()
		end,
	})
end)


syde:HidePH(tabs, 'btn')
syde:HidePH(pages, 'page')

--@@Initialize
function syde:Init(library)

	ui.Enabled = true
	if loaded == false then
		local UI_TAG = "sydeUILoader"
		local MARKER_NAME = "SYDEUIDetector"
		local INTERNAL_UUID = ("SYDE-" .. tostring(game.JobId):gsub("-", "") .. tostring(tick())):gsub("%.", "")
		local PROTECTION_EVENT = Instance.new("BindableEvent")
		local HttpService = game:GetService("HttpService")

		-- Cleanup old UI 
		local function deepCleanup()
			for _, v in ipairs(coregui:GetChildren()) do
				if v:IsA("ScreenGui") and v:FindFirstChild(MARKER_NAME) then
					pcall(function()
						v:Destroy()
					end)
				end
			end
		end
		deepCleanup()

		-- Load the Library
		local successLibrary, Library = pcall(function()
			return Library -- Replace with actual GetObjects if needed
		end)

		if not successLibrary or not Library then
			warn("[SYDE] Failed to load Library.")
			return
		end

		Library.Name = UI_TAG
		Library.ResetOnSpawn = false

		local marker = Instance.new("StringValue")
		marker.Name = MARKER_NAME
		marker.Value = INTERNAL_UUID
		marker.Parent = Library

		pcall(function()
			Library.Parent = coregui
		end)

		-- Ensure Library stays in CoreGui
		task.spawn(function()
			while Library and Library.Parent do
				task.wait(1)
				if Library.Parent ~= coregui then
					warn("[SYDE] UI moved. Restoring...")
					pcall(function()
						Library.Parent = coregui
					end)
				end
			end
		end)

	end
	task.wait(0.1)

	local Data = {
		Title = library.Title or "Syde";
		SubText = library.SubText or "Google";
		Home = library.Home or {} 
	}

	-- Now we fill in the missing pieces if they weren't provided
	Data.Home.Enabled = (Data.Home.Enabled == true) -- Forces true/false
	Data.Home.hTitle = Data.Home.hTitle or Data.Title
	Data.Home.hSubText = Data.Home.hSubText or Data.SubText
	Data.Home.profileImage = Data.Home.profileImage or Data.profileImage
	
	local Minihome = ui.minihome

	local MinihomeData = {
		QuickActions = library.QuickActions or false;
	}

	-- FPS tracking
	local lastTime = tick()
	local frames = 0

	if mh then
		rs = RunService.RenderStepped:Connect(function()
			-- FPS
			frames += 1
			local now = tick()

			if now - lastTime >= 1 then
				local fps = math.floor(frames / (now - lastTime))
				lastTime = now
				frames = 0

				Minihome.info.fps.Text = fps .. " FPS"
			end

			-- Time → 8:45
			local hour = tonumber(os.date("%I"))
			Minihome.info.time.Text = hour .. os.date(":%M")
		end)


		if MinihomeData.QuickActions == false then
			ui.minihome.quick.Visible = false
			ui.minihome:TweenSize(UDim2.new(0, 150, 0, 40), Enum.EasingDirection.Out, Enum.EasingStyle.Quart, 0.8, true)
		end
	end


	if not uiclosed then
		ui.minihome.open.quickfunc.interact.MouseButton1Click:Connect(function()
			ToggleUI()
		end)
	end

	--ui elements
	top.title.Text = Data.Title
	top.title.sub.Text = Data.SubText

	--dragging
	syde:AddDrag(top, window, true)
	syde:MakeResizable(window.resize, window, Vector2.new(454, 228))

	--initial transparency setup
	top.title.TextTransparency = 1
	tweenservice:Create(top.title, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
	top.title.sub.TextTransparency = 1
	tweenservice:Create(top.title.sub, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()

	task.spawn(function()
		task.wait(0.5)
		local titleTween = tweenservice:Create(top.title, TweenInfo.new(1.65, Enum.EasingStyle.Exponential), { TextTransparency = 0 })
		titleTween:Play()

		task.wait(0.1)
		local subTitleTween = tweenservice:Create(top.title.sub, TweenInfo.new(1.65, Enum.EasingStyle.Exponential), { TextTransparency = 0 })
		subTitleTween:Play()

		task.wait()
		local textSize = top.title.TextBounds.X + 3

		tweenservice:Create(top.title, TweenInfo.new(1.55, Enum.EasingStyle.Quint), {
			Size = UDim2.new(0, textSize, 0, 20)
		}):Play()
	end)

	local RunService = game:GetService("RunService")
	local TweenService = game:GetService("TweenService")

	local RainbowStates = {}


	for _, v in ipairs(top.functions:GetChildren()) do
		if not v:IsA("Frame") then continue end
		if not v:FindFirstChild("ImageLabel") then continue end

		local image = v.ImageLabel
		local rain
		local gradient
		if v.Name == "plugins" then
			rain = v.rainbow
			gradient = rain:FindFirstChildOfClass("UIGradient")
		end

		if v.Name == "plugins" then
			RainbowStates[v] = {
				hue = math.random(),
				connection = nil,
			}
		end

		v.MouseEnter:Connect(function()
			if not uiclosed then
				if v.Name ~= "plugins" then
					TweenService:Create(
						image,
						TweenInfo.new(0.5, Enum.EasingStyle.Exponential),
						{ ImageTransparency = 0.7 }
					):Play()
				end
			end


			if v.Name == "plugins" and gradient then
				tweenservice:Create(v.rainbow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 0 }):Play()
				local state = RainbowStates[v]
				if state.connection then return end

				state.connection = RunService.RenderStepped:Connect(function(dt)
					state.hue = (state.hue + dt * 0.6) % 1

					gradient.Color = ColorSequence.new({
						ColorSequenceKeypoint.new(0, Color3.fromHSV(state.hue, 1, 1)),
						ColorSequenceKeypoint.new(0.2, Color3.fromHSV((state.hue + 0.2) % 1, 1, 1)),
						ColorSequenceKeypoint.new(0.4, Color3.fromHSV((state.hue + 0.4) % 1, 1, 1)),
						ColorSequenceKeypoint.new(0.6, Color3.fromHSV((state.hue + 0.6) % 1, 1, 1)),
						ColorSequenceKeypoint.new(0.8, Color3.fromHSV((state.hue + 0.8) % 1, 1, 1)),
						ColorSequenceKeypoint.new(1, Color3.fromHSV((state.hue + 1) % 1, 1, 1)),
					})
				end)

			end
		end)


		v.MouseLeave:Connect(function()
			if not uiclosed then
				if v.Name ~= "plugins" then
					TweenService:Create(
						image,
						TweenInfo.new(0.5, Enum.EasingStyle.Exponential),
						{ ImageTransparency = 0 }
					):Play()
				end
			end


			if v.Name == "plugins" then
				tweenservice:Create(v.rainbow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
				local state = RainbowStates[v]
				if state and state.connection then
					state.connection:Disconnect()
					state.connection = nil
				end

			end
		end)
	end


	--[[if not searchopen then
			closesearch()
	end]]

	window.search.close.interact.MouseButton1Click:Connect(function()
		closesearch()
	end)


	local debounce = false
	local DEBOUNCE_TIME = 0.1

	top.functions.search.interact.MouseButton1Click:Connect(function()
		if debounce then return end
		debounce = true

		if not searchopen then
			opensearch()
		else
			closesearch()
		end

		task.delay(DEBOUNCE_TIME, function()
			debounce = false
		end)
	end)



	syde:AddConnection(syde.Comms.Event, function(p, value)
		if p == "Accent" then
			for i, glow in pairs(window.clipframe:GetChildren()) do
				if glow:IsA("ImageLabel") then
					tweenservice:Create(glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageColor3 = value}):Play()
				end
			end
			tweenservice:Create(window.shadow.glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageColor3 = value}):Play()
			tweenservice:Create(window.shadow.glow1, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageColor3 = value}):Play()
		end
	end)

	-- Syde Connection (Coming Soon)
	SetUserInfo()
	tweenservice:Create(window.user.headshot.id.username, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Size = UDim2.new(0, window.user.headshot.id.username.TextBounds.X + 10,0, 10)}):Play()

	if userinfodisabled == false then
		tweenservice:Create(window.tabs, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 200,1, -115) }):Play()
	else
		tweenservice:Create(window.tabs, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 200,1, -75) }):Play()
	end

	window.user.MouseEnter:Connect(function()
		tweenservice:Create(window.user.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Quart), {Thickness = 1}):Play()
	end)
	window.user.MouseLeave:Connect(function()
		tweenservice:Create(window.user.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Quart), {Thickness = 0}):Play()
	end)

	if Data.Home.Enabled then

		window.pages.home.general.presence.Profile.ImageLabel.Text.Header.Text = Data.Home.hTitle
		window.pages.home.general.presence.Profile.ImageLabel.Text.Sub.Text = Data.Home.hSubText

		window.pages.home.general.presence.Profile.ImageLabel.Image = 'rbxassetid://'..Data.Home.profileImage
		window.pages.home.general.presence.wallpaper.Image = 'rbxassetid://'..Data.Home.profileImage
		
		local placeId = game.PlaceId

		window.pages.home.general.presence.PlaceID.Text =
			"Place ID: "..placeId

	--[[	local executor = "Undetected"

		local function detect()

			if identifyexecutor then
				executor = identifyexecutor()

			elseif getexecutorname then
				executor = getexecutorname()

			elseif syn then
				executor = "Synapse X"

			elseif KRNL_LOADED then
				executor = "KRNL"

			elseif is_sirhurt_closure then
				executor = "SirHurt"

			elseif pebc_execute then
				executor = "ProtoSmasher"

			elseif secure_load then
				executor = "Sentinel"

			elseif OXYGEN_LOADED then
				executor = "Oxygen U"

			elseif fluxus then
				executor = "Fluxus"

			elseif is_fluxus_closure then
				executor = "Fluxus"

			elseif getrenv().Xeno then
				executor = "Xeno"

			elseif getrenv().Solara then
				executor = "Solara"

			elseif getgenv().Solara then
				executor = "Solara"

			elseif getgenv().Xeno then
				executor = "Xeno"

			elseif SW_LOADED then
				executor = "Script-Ware"

			elseif is_electron then
				executor = "Electron"

			elseif getexecutor then
				executor = getexecutor()

			end

		end

		--	detect()

		local ExecutorUI =
			window.pages.home.general.presence.Executor

		local Frame = ExecutorUI.Frame
		local Label = Frame.TextLabel


		Label.Text = executor

		task.wait() -- allow TextBounds to update


		local textWidth =
			math.max(Label.TextBounds.X, 40)

		local frameWidth =
			textWidth + 20

		local containerWidth =
			frameWidth + 65


		TweenService:Create(
			Label,
			TweenInfo.new(.4, Enum.EasingStyle.Quart, Enum.EasingDirection.Out),
			{
				Size = UDim2.fromOffset(textWidth, Label.AbsoluteSize.Y)
			}
		):Play()


		TweenService:Create(
			Frame,
			TweenInfo.new(.4, Enum.EasingStyle.Quart, Enum.EasingDirection.Out),
			{
				Size = UDim2.fromOffset(frameWidth, Frame.AbsoluteSize.Y)
			}
		):Play()


		TweenService:Create(
			ExecutorUI,
			TweenInfo.new(.4, Enum.EasingStyle.Quart, Enum.EasingDirection.Out),
			{
				Size = UDim2.fromOffset(containerWidth, ExecutorUI.AbsoluteSize.Y)
			}
		):Play()

		window.pages.home.general.presence.Executor.Frame.TextLabel.Text =
			executor]]

		local layout = Bento.new(window.pages.home.general.Quick,{
			Gap = 6,
			RightPadding = 20,
			TweenTime = 0.35
		})

		-- optional manual rows
		local row1 = layout:NewRow()
		local row2 = layout:NewRow()
		local row3 = layout:NewRow()

		layout:AddItem(window.pages.home.general.Quick.QuickPlay,nil,row1)
		layout:AddItem(window.pages.home.general.Quick.Player,nil,row1)
		layout:AddItem(window.pages.home.general.Quick.Latency,nil,row3)

		layout:AddItem(
			window.pages.home.general.Quick.QuickSettings,
			{Bottom = true},
			row2
		)


		layout:Bind()
		layout:Update()

		print("LATENCY SCRIPT RUNNING")

		local Stats = game:GetService("Stats")
		local TweenService = game:GetService("TweenService")

		local graph = window.pages.home.general.Quick.Latency.Frame:WaitForChild("graph")

		local pointTemplate = graph:WaitForChild("point")
		local lineTemplate = graph:WaitForChild("line")

		pointTemplate.Visible = false
		lineTemplate.Visible = false

		local UPDATE_INTERVAL = 0.3
		local MAX_POINTS = 15
		local MAX_PING = 300

		local SMOOTH_SPEED = 0.25

		local history = {}
		local smoothHistory = {}

		local points = {}
		local lines = {}
		local gridBuilt = false

		repeat task.wait() until graph.AbsoluteSize.X > 0


		local Players = game:GetService("Players")
		local RunService = game:GetService("RunService")

		local function getPing()

			local ping =
				Players.LocalPlayer:GetNetworkPing() * 1000

			if ping == 0 and RunService:IsStudio() then

				return 50 + math.noise(os.clock()*0.5)*40

			end

			return math.floor(ping)

		end



		local function clear()

			for _,obj in ipairs(graph:GetChildren()) do

				if obj ~= pointTemplate
					and obj ~= lineTemplate then

					obj:Destroy()

				end

			end

		end


		local function createGrid()

			local w = graph.AbsoluteSize.X
			local h = graph.AbsoluteSize.Y

			local steps = 4

			for i=0,steps do

				local percent = i/steps
				local y = h - (percent*h)

				local gridLine = Instance.new("Frame")
				gridLine.Size = UDim2.fromOffset(w,1)
				gridLine.Position = UDim2.fromOffset(34,y)
				gridLine.BackgroundTransparency = 0.85
				gridLine.BorderSizePixel = 0
				gridLine.Parent = graph


				local label = Instance.new("TextLabel")
				label.Size = UDim2.fromOffset(40,14)
				label.Position = UDim2.fromOffset(2,y-7)

				label.BackgroundTransparency = 1
				label.TextSize = 6
				label.TextXAlignment = Enum.TextXAlignment.Left
				label.TextColor3 = Color3.fromRGB(255, 255, 255)

				label.Text =
					math.floor(percent*MAX_PING)
					.." ms"

				label.TextTransparency = 0

				label.Parent = graph

			end

		end



		local function draw()

			clear()
			createGrid()

			local w = graph.AbsoluteSize.X
			local h = graph.AbsoluteSize.Y

			local step = w/(MAX_POINTS-1)

			local lastX,lastY

			for i,value in ipairs(smoothHistory) do

				local percent =
					math.clamp(value/MAX_PING,0,1)

				local x = (i-1)*step
				local y = h - (percent*h)


				local point = pointTemplate:Clone()
				point.Visible = false
				point.Position = UDim2.fromOffset(x,y)
				point.AnchorPoint = Vector2.new(0.5,0.5)

				point.Parent = graph


				if lastX then

					local dx = x-lastX
					local dy = y-lastY

					local length =
						math.sqrt(dx*dx + dy*dy)

					local angle =
						math.deg(math.atan2(dy,dx))

					local midX = (lastX + x)/2
					local midY = (lastY + y)/2

					local line = lineTemplate:Clone()

					line.Visible = true
					line.AnchorPoint = Vector2.new(0.5,0.5)

					line.Position =
						UDim2.fromOffset(midX,midY)

					line.Size =
						UDim2.fromOffset(length,1)

					line.Rotation = angle

					line.Parent = graph

				end


				lastX = x
				lastY = y

			end

		end



		task.spawn(function()
			while true do

				local ping = getPing()
				-- replace with getPing() when ready
				print(ping)

				table.insert(history,ping)

				if #history > MAX_POINTS then
					table.remove(history,1)
				end


				-- smooth values
				for i,v in ipairs(history) do

					local current =
						smoothHistory[i] or v

					smoothHistory[i] =
						current + (v-current)*SMOOTH_SPEED

				end


				draw()

				task.wait(UPDATE_INTERVAL)

			end
		end)

		local bh = window.pages.home.general.Quick.QuickSettings.QuickButtons.holder

		for i,v in ipairs(window.pages.home.general.Quick.QuickSettings.QuickButtons.holder:GetChildren()) do
			if v:IsA('Frame') then
				v.MouseEnter:Connect(function()
					tweenservice:Create(v.UIStroke, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()
				end)

				v.MouseLeave:Connect(function()
					tweenservice:Create(v.UIStroke, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
				end)
			end
		end

		bh.Leave.interact.MouseButton1Click:Connect(function()

			game:GetService("Players").LocalPlayer:Kick("Left the experience")

		end)

		bh.Rejoin.interact.MouseButton1Click:Connect(function()

			local TeleportService = game:GetService("TeleportService")
			local player = game:GetService("Players").LocalPlayer

			TeleportService:Teleport(game.PlaceId, player)

		end)

		local HttpService = game:GetService("HttpService")
		local TeleportService = game:GetService("TeleportService")
		local Players = game:GetService("Players")

		local player = Players.LocalPlayer

		local placeId = game.PlaceId

		local function ServerHop()

			local cursor = ""

			local servers = {}

			repeat

				local url =
					"https://games.roblox.com/v1/games/"
					..placeId..
					"/servers/Public?sortOrder=Asc&limit=100&cursor="
					..cursor

				local response =
					HttpService:JSONDecode(
						game:HttpGet(url)
					)

				for _,server in pairs(response.data) do

					if server.playing < server.maxPlayers
						and server.id ~= game.JobId then

						table.insert(servers,server.id)

					end

				end

				cursor = response.nextPageCursor

			until cursor == nil or #servers > 0


			if #servers > 0 then

				TeleportService:TeleportToPlaceInstance(
					placeId,
					servers[math.random(1,#servers)],
					player
				)

			end

		end

		bh.Fast.interact.MouseButton1Click:Connect(function()

			ServerHop()

		end)
		
		local Players = game:GetService("Players")

		local label = window.pages.home.general.Quick.Player.Frame.TextLabel -- put script inside TextLabel

		local function update()

			local current =
				#Players:GetPlayers()

			local max =
				Players.MaxPlayers

			label.Text =
				current.." / "..max

		end


		update()

		Players.PlayerAdded:Connect(update)
		Players.PlayerRemoving:Connect(update)
		
		local QuickPlay = window.pages.home.general.Quick.QuickPlay

		local HttpService = game:GetService("HttpService")
		local MarketplaceService = game:GetService("MarketplaceService")
		local TeleportService = game:GetService("TeleportService")

		local FILE = syde.ConfigFolder .. "/last_game.json"


		-- save last played game
		local function SaveLastGame(placeId)
			if not syde.ConfigEnabled then return end

			local data = {
				PlaceId = placeId,
				Time = os.time()
			}

			pcall(function()
				writefile(FILE, HttpService:JSONEncode(data))
			end)
		end


		-- load last played game
		local function LoadLastGame()
			if not syde.ConfigEnabled then return nil end
			if not isfile(FILE) then return nil end

			local success, result = pcall(function()
				return HttpService:JSONDecode(readfile(FILE))
			end)

			if success then
				return result
			end
		end



		-- get placeId from file FIRST
		local lastGame = LoadLastGame()

		local placeId = game.PlaceId

		if lastGame and lastGame.PlaceId then
			placeId = lastGame.PlaceId
		end


		local success, info = pcall(function()
			return MarketplaceService:GetProductInfoAsync(placeId, Enum.InfoType.Asset)
		end)

		if success and info then

			QuickPlay.gtitle.Text = info.Name

			local id=placeId -- your game id
			local thumbnailUrl="https://www.roblox.com/asset-thumbnail/image?assetId="..id.."&width=768&height=432&format=png"
			QuickPlay.thumb.Image=thumbnailUrl

		else

			warn("Failed to get game info for", placeId)

		end




		-- save current game after 2 minutes
		task.delay(120, function()
			if syde and syde.ConfigEnabled then
				SaveLastGame(game.PlaceId)
			end
		end)


		-- resume button
		QuickPlay.Resume.interact.MouseButton1Click:Connect(function()

			local lastGame = LoadLastGame()

			if lastGame and lastGame.PlaceId then
				TeleportService:Teleport(placeId)
			end

		end)

	else
		window.pages.home.Visible = false
		window.tabs.Home.homeicon.interact.Interactable = false
	end



	function opensettings()
		window.settings.Visible = true
		window.dim.Visible = true

		tweenservice:Create(window.settings, TweenInfo.new(0.5, Enum.EasingStyle.Quart), { Size = UDim2.new(0, 360,0, 400)}):Play()
		tweenservice:Create(window.dim, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.2 }):Play()
		tweenservice:Create(window.settings.UICorner, TweenInfo.new(0.5, Enum.EasingStyle.Quart), { CornerRadius = UDim.new(0,20)}):Play()

		tweenservice:Create(window.settings, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0}):Play()
		window.settings.pages.Visible = true
		window.settings.tabs.Visible = true

		tweenservice:Create(window.settings.top.title, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { TextTransparency = 0}):Play()
		tweenservice:Create(window.settings.top.separator, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0}):Play()
		tweenservice:Create(window.settings.top.functions.close, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0}):Play()
		tweenservice:Create(window.settings.top.functions.close.ImageLabel, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { ImageTransparency = 0}):Play()
	end

	function closesettings()
		tweenservice:Create(window.settings, TweenInfo.new(0.35, Enum.EasingStyle.Quart), { Size = UDim2.new(0, 360,0, 150)}):Play()
		tweenservice:Create(window.dim, TweenInfo.new(0.35, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1}):Play()
		tweenservice:Create(window.settings.UICorner, TweenInfo.new(0.35, Enum.EasingStyle.Quart), { CornerRadius = UDim.new(0, 90)}):Play()

		tweenservice:Create(window.settings, TweenInfo.new(0.35, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1}):Play()
		window.settings.pages.Visible = false
		window.settings.tabs.Visible = false

		tweenservice:Create(window.settings.top.title, TweenInfo.new(0.35, Enum.EasingStyle.Exponential), { TextTransparency = 1}):Play()
		tweenservice:Create(window.settings.top.separator, TweenInfo.new(0.35, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1}):Play()
		tweenservice:Create(window.settings.top.functions.close, TweenInfo.new(0.35, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1}):Play()
		tweenservice:Create(window.settings.top.functions.close.ImageLabel, TweenInfo.new(0.35, Enum.EasingStyle.Exponential), { ImageTransparency = 1}):Play()
		task.wait(0.6)
		window.settings.Visible = false
		window.dim.Visible = false
	end

	if not settingsOpen then
		closesettings()
	end

	window.top.functions.settings.interact.MouseButton1Click:Connect(function()
		if not settingsOpen then
			settingsOpen = true
			opensettings()
		end
	end)

	window.settings.top.functions.close.interact.MouseButton1Click:Connect(function()
		if settingsOpen then
			settingsOpen = false
			closesettings()
		end
	end)

	window.top.functions.mini.interact.MouseButton1Click:Connect(function()
		if not uiclosed then
			ToggleUI()
		end
	end)

	--[[
	
	 ______     ______     ______   ______   __     __   __     ______     ______    
	/\  ___\   /\  ___\   /\__  _\ /\__  _\ /\ \   /\ "-.\ \   /\  ___\   /\  ___\   
	\ \___  \  \ \  __\   \/_/\ \/ \/_/\ \/ \ \ \  \ \ \-.  \  \ \ \__ \  \ \___  \  
 	 \/\_____\  \ \_____\    \ \_\    \ \_\  \ \_\  \ \_\\"\_\  \ \_____\  \/\_____\ 
 	  \/_____/   \/_____/     \/_/     \/_/   \/_/   \/_/ \/_/   \/_____/   \/_____/ 
                                                                                 
	@@Settings
	]]


	do
		local settings = {}

		local tbdata = {
			first = false,
			selected = false
		}

		function settings:inittab(tab)
			local telement = {}
			local tdata = {
				Title = tab.Title
			}

			local tabsContainer = window.settings.tabs.ScrollingFrame
			local pagesContainer = window.settings.pages

			-- === Tab Setup ===
			local Tab = tabsContainer.tb:Clone()
			Tab.Visible = true
			Tab.Parent = tabsContainer
			Tab.Name = tdata.Title
			Tab.title.Text = tdata.Title

			-- === Page Setup ===
			local Page = pagesContainer.page:Clone()
			Page.Visible = false
			Page.Parent = pagesContainer
			Page.Name = tdata.Title

			for _, v in ipairs(Page:GetChildren()) do
				if v:IsA("Frame") then
					v:Destroy()
				end
			end

			-- === Tween Info ===
			local bgTween = TweenInfo.new(0.4, Enum.EasingStyle.Exponential)
			local textTween = TweenInfo.new(0.25, Enum.EasingStyle.Exponential)

			local function ApplyTabStyle(tabButton, selected)
				tweenservice:Create(tabButton, bgTween, {
					BackgroundColor3 = selected
						and Color3.fromRGB(31, 31, 31)
						or Color3.fromRGB(16, 16, 16)
				}):Play()

				tweenservice:Create(tabButton.title, textTween, {
					TextTransparency = selected and 0 or 0.6
				}):Play()
			end

			-- === First tab auto-select ===
			if not tbdata.selectedTab then
				tbdata.selectedTab = Tab
				Page.Visible = true
				ApplyTabStyle(Tab, true)
			else
				ApplyTabStyle(Tab, false)
			end

			-- === Click logic ===
			Tab.interact.MouseButton1Click:Connect(function()
				if tbdata.selectedTab == Tab then return end

				-- hide all pages
				for _, p in ipairs(pagesContainer:GetChildren()) do
					if p:IsA("ScrollingFrame") then
						p.Visible = false
					end
				end

				-- update tab styles
				for _, t in ipairs(tabsContainer:GetChildren()) do
					if t:IsA("Frame") then
						ApplyTabStyle(t, t == Tab)
					end
				end

				Page.Visible = true
				tbdata.selectedTab = Tab
			end)

			function telement:Button(Button)
				local data = {
					Title = Button.Title or "Temp Button";
					CallBack = Button.CallBack;
					Desc = Button.Description or "";
					Type = Button.Type or 'Default';
					HoldTime = Button.HoldTime or 3;
				}

				local button = window.settings.pages.page.Button:Clone()
				button.Visible = true
				button.Parent = Page
				button.title.Text = data.Title
				button.Name = data.Title
				button.title.Size = UDim2.new(0, button.title.TextBounds.X + 15,0, 35)

				local c

				c = data.CallBack


				local fOTween = TweenInfo.new(0.7, Enum.EasingStyle.Exponential)
				local fITween = TweenInfo.new(0.7, Enum.EasingStyle.Exponential)

				if data.Type == 'Default' then
					-- UI Stroke effect on button press

					button.interact.MouseButton1Down:Connect(function()
						tweenservice:Create(button.UIStroke, fOTween, { Transparency = 1 }):Play()
						tweenservice:Create(button.ImageLabel, fOTween, { ImageTransparency = 1 }):Play()
						tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
					end)

					button.interact.MouseButton1Up:Connect(function()
						tweenservice:Create(button.UIStroke, fITween, { Transparency = 0 }):Play()
						tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 0.95 }):Play()


					end)

					button.interact.MouseButton1Click:Connect(function()
						if data.CallBack then
							local success, errorMsg = pcall(c)
							if not success then
								warn(`[ Button Error: { button.Name } ] Callback Error: { errorMsg }`)

							end
						else
							warn(`[ CallBack Missing: { button.Name } ] No Function Assigned`)
						end
					end)

					-- Extra Check 
					button.interact.MouseLeave:Connect(function()
						tweenservice:Create(button.UIStroke, fITween, { Transparency = 0 }):Play()
						tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 0.95 }):Play()
					end)
				elseif data.Type == 'Hold' then
					local HoldTime = data.HoldTime
					local Holding = false
					local TimeLeft = HoldTime
					local Complete = false

					button.ImageLabel.Image = 'rbxassetid://127075195365098'
					button.ImageLabel.Rotation = 0
					button.ImageLabel.Size = UDim2.new(0, 16,0, 16)
					button.ImageLabel.Position = UDim2.new(1, -41,0.5, 0)

					local function CancelOperation()
						Holding = false
						tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 0.95 }):Play()
						tweenservice:Create(button.title.timer, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
						if not Complete then
							tweenservice:Create(button.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 1 }):Play()
							tweenservice:Create(button.UIStroke.UIGradient, TweenInfo.new(1, Enum.EasingStyle.Linear), { Offset = Vector2.new(-1, 0) }):Play()
							tweenservice:Create(button, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { Position = UDim2.new(0 ,-15 ,0 ,button.Position.Y.Offset) }):Play()
							task.wait(0.15)
							tweenservice:Create(button, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { Position = UDim2.new(0 ,30 ,0 ,button.Position.Y.Offset) }):Play()
							task.wait(0.15)
							tweenservice:Create(button, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { Position = UDim2.new(0 ,0 ,0 ,button.Position.Y.Offset) }):Play()
							task.wait(1)
							tweenservice:Create(button.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 0 }):Play()
						end

						-- did not complete 

						--	button.UIStroke.UIGradient.Offset = Vector2.new(-1, 0)
						--	tweenservice:Create(button.UIStroke, TweenInfo.new(HoldTime, Enum.EasingStyle.Linear), { Offset = Vector2.new(-1, 0) }):Play()

						TimeLeft = HoldTime
						button.title.timer.Text = tostring(HoldTime)
						task.wait(0.1)
						Complete = false
					end

					button.interact.MouseButton1Down:Connect(function()

						Holding = true
						TimeLeft = HoldTime
						button.title.timer.Text = tostring(TimeLeft)
						tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
						tweenservice:Create(button.title.timer, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
						tweenservice:Create(button.UIStroke.UIGradient, TweenInfo.new(HoldTime, Enum.EasingStyle.Linear), { Offset = Vector2.new(0.7, 0) }):Play()
						tweenservice:Create(button.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 0}):Play()

						-- Countdown loop
						while Holding and TimeLeft > 0 do
							TimeLeft = math.max(0, TimeLeft - runservice.Heartbeat:Wait())
							button.title.timer.Text = string.format("%.1f", TimeLeft) 

						end

						if TimeLeft <= 0 then
							Complete = true

							if data.CallBack then
								local success, errorMsg = pcall(data.CallBack)
								if not success then
									warn("[CALLBACK ERROR]:", errorMsg)
								end
							else
								warn("[CALLBACK MISSING]: No Function Assigned To", data.Title)
							end

							tweenservice:Create(button, TweenInfo.new(0.34, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.fromRGB(24, 24, 24) }):Play()
							tweenservice:Create(button.UIStroke.UIGradient, TweenInfo.new(0.1, Enum.EasingStyle.Linear), { Offset = Vector2.new(-1, 0) }):Play()
							task.wait(0.34)
							tweenservice:Create(button, TweenInfo.new(0.34, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.fromRGB(17, 17, 17) }):Play()
						end
					end)

					button.interact.MouseButton1Up:Connect(function()
						CancelOperation()
					end)

					button.interact.MouseLeave:Connect(function()
						if Holding then
							CancelOperation()
						end
					end)
				end

				--[DESC]
				local descLabel = button:FindFirstChild("desc")

				if descLabel then
					if data.Desc and data.Desc ~= "" then
						descLabel.Text = data.Desc
						descLabel.Visible = true
						descLabel.TextWrapped = true

						local function updateSize()
							local textSize = textservice:GetTextSize(
								descLabel.Text,
								descLabel.TextSize,
								descLabel.Font,
								Vector2.new(descLabel.AbsoluteSize.X, math.huge)
							)

							local newDescSize = UDim2.new(1, -150, 0, textSize.Y)
							local newButtonSize = UDim2.new(button.Size.X.Scale, button.Size.X.Offset, 0, button.title.Size.Y.Offset + textSize.Y + 10)
							tweenservice:Create(button.UICorner, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { CornerRadius = UDim.new(0,20) }):Play()
							local descTween = tweenservice:Create(descLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
							descTween:Play()

							local buttonTween = tweenservice:Create(button, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
							buttonTween:Play()
						end

						updateSize()

						descLabel:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
					else
						descLabel.Visible = false
					end
				end

			end

			function telement:Toggle(Toggle)
				local data = {
					Title = Toggle.Title or "Temp Toggle";
					Desc = Toggle.Description or "";
					V = Toggle.Value or false;
					Config = Toggle.Config or false;
					CallBack = Toggle.CallBack;
					SFlag = Toggle.SFlag;
					SettingsConfig = true;
				}

				local toggle = window.settings.pages.page.Toggle:Clone()
				toggle.Visible = true
				toggle.Parent = Page
				toggle.title.Text = data.Title
				toggle.Name = data.Title


				local toggleConfiguration = ui.Render.ToggleConfiguration:Clone()
				toggleConfiguration.Parent = ui.Render
				toggleConfiguration.Visible = false

				toggleConfiguration.Container.KeyBind.Bind.v.Text = 'None'
				tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { Size = UDim2.new(0, toggleConfiguration.Container.KeyBind.Bind.v.TextBounds.X + 20,0, 25) }):Play()

				toggleConfiguration.BackgroundTransparency = 1
				toggleConfiguration.Container.KeyBind.Title.TextTransparency = 1
				toggleConfiguration.Container.KeyBind.Bind.BackgroundTransparency = 1
				toggleConfiguration.Container.KeyBind.Bind.v.TextTransparency = 1
				toggleConfiguration.Container.Clear.Title.TextTransparency = 1
				toggleConfiguration.Container.Clear.clear.ImageLabel.ImageTransparency = 1
				toggleConfiguration.Size = UDim2.new(0, 75,0, 53)

				if not data.Config then
					toggle.configure:Destroy()
				end

				local toggleTween = TweenInfo.new(0.7, Enum.EasingStyle.Exponential)
				local fadeTween = TweenInfo.new(0.57, Enum.EasingStyle.Exponential, Enum.EasingDirection.Out)

				local function UpdateToggleUI(state)
					local targetColor = state and syde.theme.HitBox or Color3.fromRGB(28, 28, 28)
					local strokeTransparency = state and 1 or 0
					local checkTransparency = state and 0 or 1
					local gradientTransparency = state and 0 or 1
					local glowTransparency = state and 0.7 or 1
					local textTransparency = state and 0 or 0.5

					tweenservice:Create(toggle.tog, toggleTween, { BackgroundColor3 = targetColor }):Play()
					--	tweenservice:Create(toggle.tog.UIStroke, toggleTween, { Transparency = strokeTransparency }):Play()
					tweenservice:Create(toggle.tog.check, toggleTween, { ImageTransparency = checkTransparency }):Play()
					tweenservice:Create(toggle.tog.gradfr, fadeTween, { BackgroundTransparency = gradientTransparency }):Play()
					tweenservice:Create(toggle.tog.glow, toggleTween, { ImageTransparency = glowTransparency }):Play()
					tweenservice:Create(toggle.tog.glow, toggleTween, { ImageColor3 = targetColor }):Play()
					tweenservice:Create(toggle.title, toggleTween, { TextTransparency = textTransparency }):Play()
				end

				UpdateToggleUI(data.V)

				toggle.interact.MouseButton1Click:Connect(function()
					data.V = not data.V
					UpdateToggleUI(data.V)

					local success, errorMsg = pcall(function()
						if data.CallBack then
							data.CallBack(data.V)
						end
					end)

					if not success then
						warn("[CALLBACK ERROR][" .. toggle.Name .. "]: " .. tostring(errorMsg))
					end
				end)

				--[DESC]
				local descLabel = toggle:FindFirstChild("desc")

				if descLabel then
					if data.Desc and data.Desc ~= "" then
						descLabel.Text = data.Desc
						descLabel.Visible = true
						descLabel.TextWrapped = true

						local function updateSize()
							local textSize = textservice:GetTextSize(
								descLabel.Text,
								descLabel.TextSize,
								descLabel.Font,
								Vector2.new(descLabel.AbsoluteSize.X, math.huge)
							)

							local newDescSize = UDim2.new(1, -150, 0, textSize.Y)
							local newButtonSize = UDim2.new(toggle.Size.X.Scale, toggle.Size.X.Offset, 0, toggle.title.Size.Y.Offset + textSize.Y + 10) -- Adding extra padding
							tweenservice:Create(toggle.UICorner, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { CornerRadius = UDim.new(0,20) }):Play()
							local descTween = tweenservice:Create(descLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
							descTween:Play()

							local ToggleTween = tweenservice:Create(toggle, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
							ToggleTween:Play()
						end

						updateSize()

						descLabel:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
					else
						descLabel.Visible = false
					end
				end


				-- [CONFIGURATIPON]
				if data.Config then

					local State = false

					local enterTween = TweenInfo.new(0.5, Enum.EasingStyle.Exponential)

					toggle.configure.MouseEnter:Connect(function()
						tweenservice:Create(toggle.configure, enterTween, { ImageColor3 = Color3.fromRGB(255, 255, 255) }):Play()
					end)

					toggle.configure.MouseLeave:Connect(function()
						tweenservice:Create(toggle.configure, enterTween, { ImageColor3 = Color3.fromRGB(104, 104, 104) }):Play()
					end)

					local function ToggleConfigOpen()
						toggleConfiguration.Visible = true
						State = true

						tweenservice:Create(toggleConfiguration, enterTween, { BackgroundTransparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Title, enterTween, { TextTransparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, enterTween, { BackgroundTransparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.UIStroke, enterTween, { Transparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, enterTween, { TextTransparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, enterTween, { ImageTransparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration.Container.Clear.Title, enterTween, { TextTransparency = 0 }):Play()
						tweenservice:Create(toggleConfiguration, TweenInfo.new(0.7, Enum.EasingStyle.Quint), { Size = UDim2.new(0, 174,0, 88) }):Play()
						--	tweenservice:Create(toggleConfiguration.shadow.ImageLabel, enterTween, { ImageTransparency = 0.57 }):Play()

					end

					local function ToggleConfigClose()
						State = false

						tweenservice:Create(toggleConfiguration, enterTween, { BackgroundTransparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Title, enterTween, { TextTransparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, enterTween, { BackgroundTransparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.UIStroke, enterTween, { Transparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, enterTween, { TextTransparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, enterTween, { ImageTransparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration.Container.Clear.Title, enterTween, { TextTransparency = 1 }):Play()
						tweenservice:Create(toggleConfiguration, TweenInfo.new(0.7, Enum.EasingStyle.Quint), { Size = UDim2.new(0, 75,0, 53) }):Play()
						--	tweenservice:Create(toggleConfiguration.shadow.ImageLabel, enterTween, { ImageTransparency = 1 }):Play()
						task.wait(0.5)

						toggleConfiguration.Visible = false

					end

					local TogService
					local heldKeys = {} 
					local debounce1 = false

					local function ToggleConfig()
						if debounce1 then return end
						debounce1 = true

						if not toggleConfiguration.Visible then
							TogService = runservice.RenderStepped:Connect(function()
								toggleConfiguration:TweenPosition(UDim2.new(0,toggle.configure.AbsolutePosition.X - 190,0,toggle.configure.AbsolutePosition.Y + toggle.configure.AbsoluteSize.Y + 65), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.1, true)
								if not toggleConfiguration.Visible then
									TogService:Disconnect()
								end
							end)
							ToggleConfigOpen()
						else
							if TogService then TogService:Disconnect() end
							ToggleConfigClose()
						end

						task.delay(0.4, function()
							debounce1 = false
						end)
					end

					toggle.configure.MouseButton1Click:Connect(function()
						ToggleConfig()
					end)

					local function ResizeBindFrame()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { Size = UDim2.new(0, toggleConfiguration.Container.KeyBind.Bind.v.TextBounds.X + 20,0, 25) }):Play()
					end

					local function setKeybind(key)
						if not key then
							toggleConfiguration.Container.KeyBind.Bind.v.Text = 'None'
							ResizeBindFrame()
							data.Keybind = nil
						else
							data.Keybind = key
							data.KeybindReady = false

							tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
							toggleConfiguration.Container.KeyBind.Bind.v.Text = key.Name
							tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
							ResizeBindFrame()

							task.delay(0.5, function()
								data.KeybindReady = true
							end)
						end
					end

					toggleConfiguration.Container.KeyBind.Interact.MouseButton1Click:Connect(function()
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
						task.wait(0.2)
						toggleConfiguration.Container.KeyBind.Bind.v.Text = "..."
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
						ResizeBindFrame()


						local connection
						connection = userinput.InputBegan:Connect(function(input, processed)
							if not processed and input.UserInputType == Enum.UserInputType.Keyboard then
								setKeybind(input.KeyCode)
								connection:Disconnect()
							end
						end)
					end)

					userinput.InputBegan:Connect(function(input, processed)
						if not processed and data.Keybind and data.KeybindReady and input.KeyCode == data.Keybind then
							data.V = not data.V
							UpdateToggleUI(data.V)

							if data.CallBack then
								local success, errorMsg = pcall(function()
									data.CallBack(data.V)
								end)
								if not success then
									warn("[CALLBACK ERROR][" .. toggle.Name .. "]: " .. tostring(errorMsg))
								end
							end
						end
					end)

					local debounce2 = false

					toggleConfiguration.Container.Clear.Interact.MouseButton1Click:Connect(function()
						if debounce2 then return end
						debounce2 = true

						setKeybind(nil)

						local function blink()
							tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quint), { Rotation = 13 }):Play()
							task.wait(0.2)
							tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quint), { Rotation = -13 }):Play()
							task.wait(0.2)
							tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quint), { Rotation = 0 }):Play()
						end

						blink()

						task.delay(2, function()
							debounce2 = false
						end)
					end)

					toggleConfiguration.Container.Clear.MouseEnter:Connect(function()
						tweenservice:Create(toggleConfiguration.Container.Clear.clear, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.9 }):Play()
					end)

					toggleConfiguration.Container.Clear.MouseLeave:Connect(function()
						tweenservice:Create(toggleConfiguration.Container.Clear.clear, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
					end)

				end

				syde:AddConnection(syde.Comms.Event, function(p, color)
					if p == 'HitBox' then
						if data.V then
							task.wait(0.5)
							toggle.tog.BackgroundColor3 = color
							toggle.tog.glow.ImageColor3 = color
						end
					end
				end)

				function data:Set(NewValue)

					data.V = NewValue
					UpdateToggleUI(NewValue)

					local success, errorMsg = pcall(function()
						if data.CallBack then
							data.CallBack(NewValue)
						end
					end)

					if not success then
						warn("[CALLBACK ERROR][" .. toggle.Name .. "]: " .. tostring(errorMsg))
					end

				end

				if data.SFlag then
					syde.SettingsFlags[data.SFlag] = data
				end
			end

			function telement:Keybind(Keybind)
				local data = {
					Title = Keybind.Title;
					Key = Keybind.Key;
					Desc = Keybind.Description or "";
					CallBack = Keybind.CallBack;
					WaitingForKey = false;
					Hold = false;
					Holding = false
				}

				local KeyBind = window.settings.pages.page.KeyBind:Clone()
				KeyBind.Visible = true
				KeyBind.Parent = Page
				KeyBind.title.Text = data.Title
				KeyBind.Name = data.Title

				KeyBind.Bind.v.Text = data.Key and data.Key.Name or "NONE"
				tweenservice:Create(KeyBind.Bind, TweenInfo.new(0.55, Enum.EasingStyle.Quint ), {Size = UDim2.new(0, KeyBind.Bind.v.TextBounds.X + 30, 0, KeyBind.Bind.Size.Y.Offset)}):Play()

				KeyBind.interact.MouseButton1Click:Connect(function()
					KeyBind.Bind.v.Text = '...'
					tweenservice:Create(KeyBind.Bind.UIStroke, TweenInfo.new(0.25, Enum.EasingStyle.Quart), {Thickness = 1}):Play()
					data.WaitingForKey = true
				end)

				KeyBind.Bind.v:GetPropertyChangedSignal('TextBounds'):Connect(function()
					tweenservice:Create(KeyBind.Bind, TweenInfo.new(0.55, Enum.EasingStyle.Quint ), {Size = UDim2.new(0, KeyBind.Bind.v.TextBounds.X + 30, 0, KeyBind.Bind.Size.Y.Offset)}):Play()
				end)

				local function SetKeybind(keyCode)
					if keyCode and keyCode ~= Enum.KeyCode.Unknown then
						data.Key = keyCode
						KeyBind.Bind.v.Text = keyCode.Name
						tweenservice:Create(KeyBind.Bind.UIStroke, TweenInfo.new(0.25, Enum.EasingStyle.Quart), {Thickness = 0}):Play()
						if typeof(Keybind.OnKeyChanged) == "function" then
							pcall(Keybind.OnKeyChanged, keyCode)
						end
					else
						data.Key = nil
						KeyBind.Bind.v.Text = "NONE"
					end
				end

				-- Main input handler
				syde:AddConnection(userinput.InputBegan, function(input)
					if input.UserInputType ~= Enum.UserInputType.Keyboard then return end

					if data.WaitingForKey then
						data.WaitingForKey = false
						SetKeybind(input.KeyCode)
						return
					end

					if input.KeyCode == data.Key then
						data.Hold = true

						local holdConnection
						holdConnection = input.Changed:Connect(function(prop)
							if prop == "UserInputState" then
								local state = input.UserInputState
								data.Hold = (state == Enum.UserInputState.Begin)
								if state == Enum.UserInputState.End and holdConnection then
									holdConnection:Disconnect()
								end
							end
						end)

						local success, result = pcall(data.CallBack)
						if not data.Holding then
							if not success then
								warn(`[Keybind: {KeyBind.Name}] Callback Error: {result}`)
							end
						else
							if data.Hold then
								local holdLoop
								holdLoop = runservice.RenderStepped:Connect(function()
									if not data.Hold then
										data.CallBack(false)
										holdLoop:Disconnect()
									else
										data.CallBack(false)
									end
								end)
							end
						end
					end
				end)
			end

			function telement:ColorPicker(ColorPicker)
				local data = {
					Title = ColorPicker.Title;
					Color = ColorPicker.Color;
					Color2 = ColorPicker.Color2;
					Linkable = ColorPicker.Linkable;
					Type = ColorPicker.Type or 'ColorPicker';
					GradientPath = ColorPicker.GradientPath;
					CallBack = ColorPicker.CallBack;
					SFlag = ColorPicker.SFlag;
				}

				ColorPicker.Linkable = ColorPicker.Linkable or true

				local colorpicker = window.settings.pages.page.ColorPicker:Clone()
				colorpicker.Visible = true
				colorpicker.Parent = Page
				colorpicker.title.Text = data.Title
				colorpicker.Name = data.Title

				local isLinkable = Instance.new("BoolValue")
				isLinkable.Name = 'isLinkable'
				isLinkable.Value = data.Linkable
				isLinkable.Parent = colorpicker

				local HueSat = Instance.new("Color3Value")
				HueSat.Name = 'HueSat'
				HueSat.Value = data.Color
				HueSat.Parent = colorpicker


				local Open = false
				local DeBounce = false
				local State = false

				do
					local HueValues = colorpicker.HueValues

					-- kill UIListLayout if it exists
					local list = HueValues:FindFirstChildOfClass("UIListLayout")
					if list then list:Destroy() end

					local ITEMS = {
						HueValues.HEX,
						HueValues.RGB,
						HueValues.Link
					}

					local GAP = 8
					local ITEM_HEIGHT = 30
					local ITEM_WIDTH = 120
					local HORIZONTAL_THRESHOLD = 260

					local function updateHueValuesLayout()
						if not HueValues.Visible then return end

						local width = HueValues.AbsoluteSize.X
						local horizontal = width >= HORIZONTAL_THRESHOLD

						local x, y = 0, 0
						local totalHeight = 0

						for _, item in ipairs(ITEMS) do
							item.AnchorPoint = Vector2.new(1, 0)

							if horizontal then
								item.Size = UDim2.new(0, ITEM_WIDTH, 0, ITEM_HEIGHT)
								item.Position = UDim2.new(1, -x, 0, 0)
								x += ITEM_WIDTH + GAP
								totalHeight = ITEM_HEIGHT
							else
								item.Size = UDim2.new(1, -4, 0, ITEM_HEIGHT)
								item.Position = UDim2.new(1, 0, 0, -y)
								y += ITEM_HEIGHT + GAP
								totalHeight = y
							end
						end

						HueValues.Size = UDim2.new(1, -40, 0, totalHeight)
						HueValues.Position = UDim2.new(0.5, 0,1, -50)

						if Open then
							tweenservice:Create(
								colorpicker,
								TweenInfo.new(0.35, Enum.EasingStyle.Quart),
								{ Size = UDim2.new(1, -35, 0, 295 + totalHeight) }
							):Play()
						end
					end

					HueValues:GetPropertyChangedSignal("AbsoluteSize"):Connect(updateHueValuesLayout)
					colorpicker:GetPropertyChangedSignal("AbsoluteSize"):Connect(updateHueValuesLayout)

					colorpicker:SetAttribute("UpdateHueLayout", true)
					colorpicker:GetAttributeChangedSignal("UpdateHueLayout"):Connect(updateHueValuesLayout)

					task.defer(updateHueValuesLayout)
				end


				colorpicker.color.Values.Hue.BackgroundTransparency = 1
				colorpicker.color.Values.Hue.Pin.BackgroundTransparency = 1
				colorpicker.color.Values.Hue.Pin.UIStroke.Transparency = 1
				colorpicker.color.Values.Rainbow.ImageTransparency = 1

				if data.Type == "Gradient" then
					colorpicker.color.Values.Grad.BackgroundTransparency = 1
					colorpicker.color.Values.Grad.Pin1.BackgroundTransparency = 1
					colorpicker.color.Values.Grad.Pin1.UIStroke.Transparency = 1
					colorpicker.color.Values.Grad.Pin2.BackgroundTransparency = 1
					colorpicker.color.Values.Grad.Pin2.UIStroke.Transparency = 1
				end

				colorpicker.color.SVPicker.Pin.BackgroundTransparency = 1
				colorpicker.color.SVPicker.Pin.UIStroke.Transparency = 1
				colorpicker.color.SVPicker.Brightness.BackgroundTransparency = 1
				colorpicker.color.SVPicker.Saturation.BackgroundTransparency = 1

				colorpicker.HueValues.HEX.BackgroundTransparency = 1
				colorpicker.HueValues.HEX.UIStroke.Transparency = 1
				colorpicker.HueValues.HEX.V.HEXBox.TextTransparency = 1
				colorpicker.HueValues.HEX.Copy.ImageTransparency = 1

				colorpicker.HueValues.RGB.BackgroundTransparency = 1
				colorpicker.HueValues.RGB.UIStroke.Transparency = 1
				colorpicker.HueValues.RGB.V.RGBBox.TextTransparency = 1
				colorpicker.HueValues.RGB.Copy.ImageTransparency = 1

				colorpicker.HueValues.Link.BackgroundTransparency = 1
				colorpicker.HueValues.Link.UIStroke.Transparency = 1
				colorpicker.HueValues.Link.Frame.BackgroundTransparency = 1
				colorpicker.HueValues.Link.Frame.ImageLabel.ImageTransparency = 1

				colorpicker.QuickClose.Interactable = false
				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundColor3 = data.Color }):Play()

				local recentContainer = colorpicker.color.Values.Recent
				local spacing = 5
				local frameSize = 12 

				local function updateRecentLayout()
					local children = {} 
					for _, child in pairs(recentContainer:GetChildren()) do
						if child:IsA("Frame") then
							table.insert(children, child)
						end
					end

					table.sort(children, function(a, b)
						return a.LayoutOrder > b.LayoutOrder 
					end)

					local totalWidth = #children * frameSize + math.max(#children - 1, 0) * spacing
					local startX = recentContainer.AbsoluteSize.X - totalWidth 

					for _, frame in ipairs(children) do
						--	frame.Position = UDim2.new(0, startX, 0.5, -frame.Size.Y.Offset / 2)
						tweenservice:Create(frame, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Position = UDim2.new(0, startX , 0.8, -frame.Size.Y.Offset / 2) }):Play()
						startX += frameSize + spacing
					end
				end

				recentContainer.ChildAdded:Connect(function(child)
					if child:IsA("Frame") then
						child.LayoutOrder = os.time() 
						updateRecentLayout()
					end
				end)
				recentContainer.ChildRemoved:Connect(updateRecentLayout)
				updateRecentLayout()

				local HSV

				if data.Color then
					HSV = { data.Color:ToHSV() }
				else

					HSV = { 0, 0, 0 }
				end
				local Selected = data.Color
				local HueValue = HSV[1]

				local function TableToColor(Table)
					if type(Table) ~= "table" then return Table end
					return Color3.fromHSV(Table[1],Table[2],Table[3])
				end

				local function FormatColor(Color, format, precision)

					format = format or "RGB"
					precision = precision or 2

					local formattedColor = ""

					if format == "RGB" then
						return	math.round(Color.R * 255) .. "," .. math.round(Color.G * 255) .. "," .. math.round(Color.B * 255)
					elseif format == "Hex" then
						formattedColor = string.format("#%02X%02X%02X",
							math.round(Color.R * 255),
							math.round(Color.G * 255),
							math.round(Color.B * 255)
						)

						return formattedColor
					end
				end

				local SVPicker = colorpicker.color.SVPicker
				local HUESlider = colorpicker.color.Values.Hue

				SVPicker.Pin.BackgroundColor3 = data.Color
				HUESlider.Pin.BackgroundColor3 = data.Color

				local Keys
				local ExternalGradient
				local ActivePin = 1
				local GradientFrame = colorpicker.color.Values:FindFirstChild("Grad")
				local HueFrame = colorpicker.color.Values.Hue
				local DraggingPin = nil

				local function updatestuff()
					data.Color = TableToColor(HSV)
					colorpicker.color.BackgroundColor3 = data.Color
					colorpicker.color.glow.ImageColor3 = data.Color

					--	colorpicker.color.BackgroundColor3 = Color3.fromHSV(HSV[1], 1, 1)
					local newColor = Color3.fromHSV(HSV[1], HSV[2], HSV[3])
					local newColor2 = Color3.fromHSV(HSV[1], 1, 1)

					if data.Type == "Gradient" and Keys and Keys[ActivePin] then
						Keys[ActivePin] = ColorSequenceKeypoint.new(Keys[ActivePin].Time, newColor)

						Keys[1] = ColorSequenceKeypoint.new(0, Keys[2].Value)
						Keys[4] = ColorSequenceKeypoint.new(1, Keys[3].Value)

						data.Color  = Keys[2].Value
						data.Color2 = Keys[3].Value

						local seq = ColorSequence.new(Keys)
						if ExternalGradient then
							ExternalGradient.Color = seq
						end
						GradientFrame.Gradient.Color = seq

						GradientFrame.Pin1.BackgroundColor3 = data.Color
						GradientFrame.Pin2.BackgroundColor3 = data.Color2
					end


					HueSat.Value = data.Color

					tweenservice:Create(HUESlider.Pin, TweenInfo.new(0.1, Enum.EasingStyle.Exponential), {BackgroundColor3 = newColor2}):Play()
					tweenservice:Create(SVPicker.Pin, TweenInfo.new(0.1, Enum.EasingStyle.Exponential), {BackgroundColor3 = newColor}):Play()


					tweenservice:Create(SVPicker.Pin, TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
						Position = UDim2.new(HSV[2], 0, 1 - HSV[3], 0)
					}):Play()

					tweenservice:Create(HUESlider.Pin, TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
						Position = UDim2.new(1 - HSV[1], 0, 0.5, 0)
					}):Play()

					local formattedHex = FormatColor(data.Color, 'Hex')
					colorpicker.HueValues.HEX.V.HEXBox.PlaceholderText = formattedHex

					local formattedRGB = FormatColor(data.Color,'RGB', 2)
					colorpicker.HueValues.RGB.V.RGBBox.PlaceholderText = formattedRGB

					if data.CallBack then
						data.CallBack(data.Color)
					end
				end
				updatestuff()

				local newColor = Color3.fromHSV(HSV[1], HSV[2], HSV[3])

				local oldCallback = data.CallBack
				data.CallBack = function(col)
					if data.Type ~= "Gradient" then
						if oldCallback then oldCallback(col) end
						return
					end

					table.sort(Keys, function(a,b) return a.Time < b.Time end)

					Keys[1] = ColorSequenceKeypoint.new(0, Keys[2].Value)
					Keys[4] = ColorSequenceKeypoint.new(1, Keys[3].Value)

					data.Color  = Keys[2].Value
					data.Color2 = Keys[3].Value

					local seq = ColorSequence.new(Keys)
					ExternalGradient.Color = seq
					GradientFrame.Gradient.Color = seq

					if oldCallback then
						oldCallback(seq, data.Color, data.Color2)
					end
				end


				if data.Type == "Gradient" then
					HueFrame.Visible = true
					GradientFrame.Visible = true

					ExternalGradient = data.GradientPath

					local startCol = data.Color or ExternalGradient.Color.Keypoints[1].Value
					local endCol = data.Color2 or ExternalGradient.Color.Keypoints[#ExternalGradient.Color.Keypoints].Value

					Keys = {
						ColorSequenceKeypoint.new(0, startCol),      
						ColorSequenceKeypoint.new(0.2, startCol),  
						ColorSequenceKeypoint.new(0.8, endCol),     
						ColorSequenceKeypoint.new(1, endCol)         
					}

					ActivePin = 2 

					GradientFrame.Pin1.BackgroundColor3 = startCol
					GradientFrame.Pin2.BackgroundColor3 = endCol
				end

				local oldCallback = data.CallBack
				data.CallBack = function(col)
					if data.Type ~= "Gradient" then
						if oldCallback then oldCallback(col) end
						return
					end

					table.sort(Keys, function(a,b) return a.Time < b.Time end)
					Keys[1] = ColorSequenceKeypoint.new(0, Keys[1].Value)
					Keys[#Keys] = ColorSequenceKeypoint.new(1, Keys[#Keys].Value)

					local seq = ColorSequence.new(Keys)
					ExternalGradient.Color = seq
					GradientFrame.Gradient.Color = seq

					if oldCallback then oldCallback(seq) end
				end

				if data.Type == "Gradient" then
					local g = GradientFrame
					local UIS = game:GetService("UserInputService")
					local RS = game:GetService("RunService")
					local mouse = game.Players.LocalPlayer:GetMouse()

					local function updateUI()
						g.Pin1.Position = UDim2.new(Keys[2].Time, 0, 0.5, 0)
						g.Pin1.BackgroundColor3 = Keys[2].Value

						g.Pin2.Position = UDim2.new(Keys[3].Time, 0, 0.5, 0)
						g.Pin2.BackgroundColor3 = Keys[3].Value

						local seq = ColorSequence.new(Keys)
						ExternalGradient.Color = seq
						g.Gradient.Color = seq
					end

					g.Pin1.InputBegan:Connect(function(input)
						if input.UserInputType == Enum.UserInputType.MouseButton1 then
							DraggingPin = 2
							ActivePin = 2
							local h, s, v = Keys[2].Value:ToHSV()
							HSV[1], HSV[2], HSV[3] = h, s, v
							updatestuff()
						end
					end)

					g.Pin2.InputBegan:Connect(function(input)
						if input.UserInputType == Enum.UserInputType.MouseButton1 then
							DraggingPin = 3
							ActivePin = 3
							local h, s, v = Keys[3].Value:ToHSV()
							HSV[1], HSV[2], HSV[3] = h, s, v
							updatestuff()
						end
					end)

					UIS.InputEnded:Connect(function(input)
						if input.UserInputType == Enum.UserInputType.MouseButton1 then
							DraggingPin = nil
						end
					end)

					RS.Heartbeat:Connect(function()
						if not DraggingPin then return end

						local relX = (mouse.X - g.AbsolutePosition.X) / g.AbsoluteSize.X
						relX = math.clamp(relX, 0, 1)

						if DraggingPin == 2 then
							relX = math.clamp(relX, 0, Keys[3].Time - 0.01) 
						elseif DraggingPin == 3 then
							relX = math.clamp(relX, Keys[2].Time + 0.01, 1) 
						end

						Keys[DraggingPin] = ColorSequenceKeypoint.new(relX, Keys[DraggingPin].Value)

						updateUI()
					end)

					updateUI()
				end
				local function OpenPicker()
					Open = true
					DeBounce = true
					colorpicker.color.Values.Visible = true
					colorpicker.color.SVPicker.Visible = true

					colorpicker.HueValues.Visible = true
					colorpicker.color.Values.Recent.Visible = true

					colorpicker.interact.Interactable = false
					colorpicker.QuickClose.Interactable = true

					colorpicker.HueValues.Visible = true

					local displayGrad = colorpicker.color:FindFirstChildOfClass("UIGradient")
					if displayGrad then
						displayGrad.Enabled = false
					end

					colorpicker:SetAttribute("UpdateHueLayout", not colorpicker:GetAttribute("UpdateHueLayout"))

					tweenservice:Create(colorpicker.UICorner, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { CornerRadius = UDim.new(0,20) }):Play()
					tweenservice:Create(colorpicker.color, TweenInfo.new( 0.95, Enum.EasingStyle.Quart ), { Size = UDim2.new(0, 1,0, 1) }):Play()
					tweenservice:Create(colorpicker, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(35, 35, 35) }):Play()
					tweenservice:Create(colorpicker.color, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromHSV(HSV[1], 1, 1) }):Play()
					tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					--	tweenservice:Create(colorpicker.color.glow, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 1}):Play()
					task.wait(0.12)
					tweenservice:Create(colorpicker.color, TweenInfo.new( 0.9, Enum.EasingStyle.Quart ), { Size = UDim2.new(1, -40,0, 160) }):Play()
					tweenservice:Create(colorpicker.color, TweenInfo.new( 0.9, Enum.EasingStyle.Quart ), { Position = UDim2.new(0.5, 0,0, 40) }):Play()

					tweenservice:Create(colorpicker, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(17, 17, 17) }):Play()
					tweenservice:Create(colorpicker, TweenInfo.new( 0.8, Enum.EasingStyle.Quart ), { Size = UDim2.new(1, -35,0, 300) }):Play()
					tweenservice:Create(colorpicker.color.UICorner, TweenInfo.new( 0.8, Enum.EasingStyle.Quart ), { CornerRadius = UDim.new(0, 10) }):Play()

					tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()


					task.wait(0.6)

					tweenservice:Create(colorpicker.color.SVPicker.Brightness, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.SVPicker.Saturation, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.SVPicker.Pin, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.SVPicker.Pin.UIStroke, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()

					task.wait(0.5)
					tweenservice:Create(colorpicker.color.Values.Hue, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.Values.Hue.Pin, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.Values.Hue.Pin.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()

					if data.Type == "Gradient" then
						tweenservice:Create(colorpicker.color.Values.Grad, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin1, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin1.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin2, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin2.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()
					end

					tweenservice:Create(colorpicker.HueValues.HEX, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0.9 }):Play()
					tweenservice:Create(colorpicker.HueValues.HEX.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0.4 }):Play()
					tweenservice:Create(colorpicker.HueValues.HEX.V.HEXBox, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { TextTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.HueValues.HEX.Copy, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()

					task.wait(0.09)
					tweenservice:Create(colorpicker.HueValues.RGB, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0.9 }):Play()
					tweenservice:Create(colorpicker.HueValues.RGB.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0.4 }):Play()
					tweenservice:Create(colorpicker.HueValues.RGB.V.RGBBox, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { TextTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.HueValues.RGB.Copy, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()
					task.wait(0.09)
					tweenservice:Create(colorpicker.HueValues.Link, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0.9 }):Play()
					tweenservice:Create(colorpicker.HueValues.Link.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0.4 }):Play()
					tweenservice:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.HueValues.Link.Frame.ImageLabel, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()

					for _,v in ipairs(colorpicker.color.Values.Recent:GetChildren()) do
						if v:IsA('Frame') then
							task.wait(0.1)
							tweenservice:Create(v, TweenInfo.new( 0.3, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
						end
					end

					task.wait(0.7)
					DeBounce = false
				end


				colorpicker.interact.MouseButton1Click:Connect(function()
					if DeBounce then return end
					if not Open then
						Open = true
						OpenPicker()
					end
				end)

				colorpicker.QuickClose.hitbox.MouseEnter:Connect(function()
					tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Quint ), { Size = UDim2.new(0, 70,0, 3) }):Play()
					tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(255, 255, 255) }):Play()
				end)

				colorpicker.QuickClose.hitbox.MouseLeave:Connect(function()
					tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Quint ), { Size = UDim2.new(0, 60,0, 3) }):Play()
					tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(33, 33, 33) }):Play()
				end)

				local function ClosePicker()
					Open = false
					DeBounce = true
					tweenservice:Create(colorpicker.UICorner, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { CornerRadius = UDim.new(1,0) }):Play()
					tweenservice:Create(colorpicker, TweenInfo.new( 0.55, Enum.EasingStyle.Quint ), { Size = UDim2.new(1, -35,0, 40) }):Play()
					--	tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color, TweenInfo.new( 0.7, Enum.EasingStyle.Quart ), { Position = UDim2.new(1, -30,0, 10)}):Play()
					tweenservice:Create(colorpicker.color, TweenInfo.new( 0.55, Enum.EasingStyle.Quint ), { Size = UDim2.new(0, 20,0, 20) }):Play()
					tweenservice:Create(colorpicker.color, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundColor3 = data.Color }):Play()
					tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					--	tweenservice:Create(colorpicker.color.glow, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 0.7}):Play()
					colorpicker.interact.Interactable = true
					colorpicker.QuickClose.Interactable = false

					--	task.wait(0.6)

					tweenservice:Create(colorpicker.color.SVPicker.Brightness, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.SVPicker.Saturation, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.SVPicker.Pin, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.SVPicker.Pin.UIStroke, TweenInfo.new( 0.4, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()

					tweenservice:Create(colorpicker.color.Values.Hue, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.Values.Hue.Pin, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.Values.Hue.Pin.UIStroke, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()

					tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()

					if data.Type == "Gradient" then
						tweenservice:Create(colorpicker.color.Values.Grad, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin1, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin1.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin2, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
						tweenservice:Create(colorpicker.color.Values.Grad.Pin2.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
					end

					local displayGrad = colorpicker.color:FindFirstChildOfClass("UIGradient")

					if data.Type == "Gradient" and displayGrad then
						displayGrad.Enabled = true
						displayGrad.Color = ColorSequence.new(Keys)
						-- Set to White so the gradient isn't "multiplied" or tinted by a background color
						tweenservice:Create(colorpicker.color, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.new(1, 1, 1) }):Play()
					else
						if displayGrad then displayGrad.Enabled = false end
						tweenservice:Create(colorpicker.color, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundColor3 = data.Color }):Play()
					end

					tweenservice:Create(colorpicker.HueValues.RGB, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.RGB.UIStroke, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.RGB.V.RGBBox, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { TextTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.RGB.Copy, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()

					tweenservice:Create(colorpicker.HueValues.HEX, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.HEX.UIStroke, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.HEX.V.HEXBox, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { TextTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.HEX.Copy, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()

					tweenservice:Create(colorpicker.HueValues.Link, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.Link.UIStroke, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.HueValues.Link.Frame.ImageLabel, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()
					for _,v in ipairs(colorpicker.color.Values.Recent:GetChildren()) do
						if v:IsA('Frame') then
							tweenservice:Create(v, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
						end
					end
					colorpicker.HueValues.Visible = false
					task.wait(1)
					colorpicker.color.SVPicker.Visible = false
					colorpicker.color.Values.Recent.Visible = false
					task.wait(0.7)
					DeBounce = false
				end

				colorpicker.QuickClose.hitbox.MouseButton1Click:Connect(function()
					if DeBounce then return end
					if Open then
						Open = false
						ClosePicker()
					end
				end)


				for _,v in ipairs(colorpicker.HueValues:GetChildren()) do
					if v:IsA("Frame") then
						for _,v2 in ipairs(v:GetChildren()) do
							if v2:IsA("ImageLabel") then
								v2.MouseEnter:Connect(function()
									tweenservice:Create(v2, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {ImageColor3 = Color3.fromRGB(255, 255, 255) }):Play()
								end)
								v2.MouseLeave:Connect(function()
									tweenservice:Create(v2, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {ImageColor3 = Color3.fromRGB(66, 66, 66) }):Play()
								end)
							end
						end
					end
				end

				local function AddRecentColor(newColor)
					local recentFrame = colorpicker.colorPlaceHolder:Clone()
					recentFrame.Visible = true
					recentFrame.Parent = colorpicker.color.Values.Recent
					recentFrame.BackgroundColor3 = newColor

					recentFrame.interact.MouseButton1Click:Connect(function()
				--[[	tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 5,0, 5) }):Play()
					task.wait(0.09)
					tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 12,0, 12) }):Play() ]]

						local h, s, v = newColor:ToHSV()
						if s > 0.02 then
							HSV[1] = h
						end
						HSV[2] = s
						HSV[3] = v
						updatestuff()

					end)

					recentFrame.interact.MouseEnter:Connect(function()
						tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 20,0, 20) }):Play()
					end)

					recentFrame.interact.MouseLeave:Connect(function()
						tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 12,0, 12) }):Play()
					end)

					local maxRecentColors = 10
					local recentContainer = colorpicker.color.Values.Recent

					local children = recentContainer:GetChildren()
					if #children > maxRecentColors then
						for _, child in ipairs(children) do
							if child:IsA("Frame") then
								child:Destroy()
								break
							end
						end
					end
				end

				local SV, HUE = nil, nil

				syde:AddConnection(SVPicker.InputBegan, function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						SV = runservice.RenderStepped:Connect(function()
							local mouse = game.Players.LocalPlayer:GetMouse()
							local ColorX = math.clamp(mouse.X - SVPicker.AbsolutePosition.X, 0, SVPicker.AbsoluteSize.X) / SVPicker.AbsoluteSize.X
							local ColorY = math.clamp(mouse.Y - SVPicker.AbsolutePosition.Y, 0, SVPicker.AbsoluteSize.Y) / SVPicker.AbsoluteSize.Y

							HSV[2] = ColorX
							HSV[3] = 1 - ColorY

							updatestuff()
						end)
					end
				end)

				syde:AddConnection(SVPicker.InputEnded, function(i)
					if i.UserInputType == Enum.UserInputType.MouseButton1 and SV then
						SV:Disconnect()
						SV = nil
						AddRecentColor(data.Color)
					end
				end)

				syde:AddConnection(HUESlider.InputBegan, function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						HUE = runservice.RenderStepped:Connect(function()
							local mouse = game.Players.LocalPlayer:GetMouse()
							local ColorX = math.clamp(mouse.X - HUESlider.AbsolutePosition.X, 0, HUESlider.AbsoluteSize.X) / HUESlider.AbsoluteSize.X

							HSV[1] = 1 - ColorX

							updatestuff()
						end)
					end
				end)

				syde:AddConnection(HUESlider.InputEnded, function(i)
					if i.UserInputType == Enum.UserInputType.MouseButton1 and HUE then
						HUE:Disconnect()
						HUE = nil
						AddRecentColor(data.Color)
					end
				end)

				colorpicker.HueValues.HEX.V.HEXBox.FocusLost:Connect(function(Enter)
					if not Enter then return end

					local hexInput = colorpicker.HueValues.HEX.V.HEXBox.Text

					local success, result = pcall(function()
						return Color3.fromHex(hexInput)
					end)

					if success then
						local Hue, Saturation, Value = result:ToHSV()
						colorpicker.HueValues.HEX.V.HEXBox.Text = ''
						if Saturation > 0.02 then
							HSV[1] = Hue
						end
						HSV[2] = Saturation
						HSV[3] = Value
						updatestuff()
					else
						warn("Failed to convert hex to color:", result)
					end
				end)


				colorpicker.HueValues.RGB.V.RGBBox.FocusLost:Connect(function(Enter)
					if not Enter then return end

					local rgbInput = colorpicker.HueValues.RGB.V.RGBBox.Text

					local r, g, b = rgbInput:match("^(%d+),%s*(%d+),%s*(%d+)$")

					if r and g and b then

						r, g, b = tonumber(r), tonumber(g), tonumber(b)

						if r >= 0 and r <= 255 and g >= 0 and g <= 255 and b >= 0 and b <= 255 then
							local color = Color3.fromRGB(r, g, b)

							local Hue, Saturation, Value = color:ToHSV()
							if Saturation > 0.02 then
								HSV[1] = Hue
							end
							HSV[2] = Saturation
							HSV[3] = Value

							colorpicker.HueValues.RGB.V.RGBBox.Text = ''
							updatestuff()
						else
							warn("RGB values must be between 0 and 255.")
						end
					else
						warn("Invalid RGB format. Please use the format 'R,G,B' (e.g., 16,16,16).")
					end
				end)

				local UserInputService = game:GetService("UserInputService")
				local TweenService = game:GetService("TweenService")
				local RunService = game:GetService("RunService")

				local linkDragging = false
				local originalPosition = UDim2.new(0.5, 0,0, 0)
				local draggedColorPicker = nil

				local function isMouseOver(guiObject)
					local mouse = game.Players.LocalPlayer:GetMouse()
					local pos = guiObject.AbsolutePosition
					local size = guiObject.AbsoluteSize
					return mouse.X >= pos.X and mouse.X <= pos.X + size.X and mouse.Y >= pos.Y and mouse.Y <= pos.Y + size.Y
				end

				colorpicker.HueValues.Link.Frame.interact.MouseButton1Down:Connect(function()
					linkDragging = true
					draggedColorPicker = colorpicker

					TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {Size = UDim2.new(0, 40,1, 0)}):Play()

					local followMouse
					followMouse = RunService.RenderStepped:Connect(function()
						if not linkDragging then
							followMouse:Disconnect()
							return
						end
						local mouse = game.Players.LocalPlayer:GetMouse()
						--	colorpicker.HueValues.Link.Frame.Position = UDim2.new(0, mouse.X - colorpicker.AbsolutePosition.X - 50, 0, mouse.Y - colorpicker.AbsolutePosition.Y - 260)
						TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.3, Enum.EasingStyle.Quart), {Position = UDim2.new(0, mouse.X - colorpicker.AbsolutePosition.X - 50, 0, mouse.Y - colorpicker.AbsolutePosition.Y - 260) }):Play()

						for _, otherPicker in pairs(Page:GetChildren()) do
							if otherPicker:IsA("Frame") and otherPicker:FindFirstChild("isLinkable") and otherPicker.isLinkable.Value then
								if isMouseOver(otherPicker) and otherPicker ~= draggedColorPicker then
									TweenService:Create(otherPicker.UIStroke, TweenInfo.new(0.6, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()
								else
									TweenService:Create(otherPicker.UIStroke, TweenInfo.new(0.6, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
								end
							end
						end
					end)
				end)

				UserInputService.InputEnded:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 and linkDragging then
						linkDragging = false
						local foundTarget = false

						for _, otherPicker in pairs(Page:GetChildren()) do
							if otherPicker:IsA("Frame") and otherPicker:FindFirstChild("isLinkable") and otherPicker.isLinkable.Value then
								if isMouseOver(otherPicker) and otherPicker ~= draggedColorPicker then
									otherPicker.HueSat.Value = draggedColorPicker.HueSat.Value
									updatestuff() 
									foundTarget = true
									TweenService:Create(
										colorpicker.HueValues.Link.Frame,
										TweenInfo.new(0.3, Enum.EasingStyle.Quint),
										{ Position = originalPosition }
									):Play()

									TweenService:Create(otherPicker.UIStroke, TweenInfo.new(0.6, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
									--	TweenService:Create(colorpicker.HueValues.HEX.Link, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {ImageColor3 = Color3.fromRGB(66, 66, 66)}):Play()
									TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {Size = UDim2.new(1, 0,1, 0)}):Play()
									break
								end
							end
						end

						if not foundTarget then
							--	TweenService:Create(colorpicker.HueValues.HEX.Link, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {ImageColor3 = Color3.fromRGB(66, 66, 66)}):Play()
							TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {Size = UDim2.new(1, 0,1, 0)}):Play()
							TweenService:Create(
								colorpicker.HueValues.Link.Frame,
								TweenInfo.new(0.3, Enum.EasingStyle.Quint),
								{ Position = originalPosition }
							):Play()
						end
					end
				end) 

				local function updateColorPicker()
					local Hue, Saturation, Value = HueSat.Value:ToHSV()

					if Saturation > 0.02 then
						HSV[1] = Hue
					end
					HSV[2] = Saturation
					HSV[3] = Value

					updatestuff()
				end

				HueSat.Changed:Connect(updateColorPicker)

				local hueIncrement = 0.005 

				local function RainbowEffect()
					HueValue = (HueValue + hueIncrement) % 1
					HSV[1] = HueValue

					updatestuff()
				end

				local isRainbowEnabled = false
				local huerender = nil

				local function ToggleRainbowEffect()
					isRainbowEnabled = not isRainbowEnabled
					if isRainbowEnabled then
						if not huerender then
							huerender = runservice.RenderStepped:Connect(RainbowEffect)
							tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential ), {ImageColor3 = Color3.fromRGB(255, 255, 255)}):Play()
						end
					else
						if huerender then
							huerender:Disconnect()
							tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential ), {ImageColor3 = Color3.fromRGB(62, 62, 62)}):Play()
							huerender = nil
						end
					end
				end

				colorpicker.color.Values.Rainbow.MouseButton1Click:Connect(ToggleRainbowEffect)

				function data:Set(RGBColor)

					if typeof(RGBColor) == "table" then
						RGBColor = Color3.fromRGB(RGBColor.R, RGBColor.G, RGBColor.B)
					end

					data.Color = RGBColor

					local h, s, v = RGBColor:ToHSV()
					HSV[1], HSV[2], HSV[3] = h, s, v
					updatestuff()
				end

				if data.SFlag then
					syde.SettingsFlags[data.SFlag] = data
				end

				if syde.ConfigEnabled and data.Flag and syde.Flags[data.Flag] then
					local existing = syde.Flags[data.Flag]
					if existing.Color then
						data:Set(existing.Color, true)
					end
				end

				colorpicker.color.Values.Rainbow.MouseButton1Click:Connect(ToggleRainbowEffect)

				return data

			end


			function telement:Dropdown(Dropdown)
				local data = {
					Title = Dropdown.Title or "Temp Dropdown";
					Options = Dropdown.Options or {};
					StarterOption = Dropdown.StarterOption;
					PlaceHolder = Dropdown.PlaceHolder or "Select Option...";
					Multi = Dropdown.Multi or false;
					CallBack = Dropdown.CallBack;
				}

				local dropdown = window.settings.pages.page.Dropdown:Clone()
				dropdown.Visible = true
				dropdown.Parent = Page
				dropdown.title.Text = data.Title
				dropdown.Name = data.Title
				dropdown.dropholder.drop.Container.Option.Visible = false
				dropdown.dropholder.drop.Container.Visible = false
				tweenservice:Create(dropdown.dropholder.drop.Container, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(0.33, -20,0.576, -75) }):Play()
				dropdown.dropholder.drop.selected.Text = data.PlaceHolder 

				local DropOpen = false
				local DeBounce = false
				local OptionButton = dropdown.dropholder.drop.Container.Option
				local SelectedOptions = {}
				local SelectedOrder = {}

				local function UpdateCustomLayout()
					local yOffset = 0
					for _, option in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
						if option:IsA("Frame") and option.Visible then
							tweenservice:Create(option, TweenInfo.new(0.5, Enum.EasingStyle.Quint), {Position = UDim2.new(0, 0, 0, yOffset)}):Play()
							yOffset = yOffset + option.Size.Y.Offset + 7
						end
					end
				end

				local function OpenDrop()
					DropOpen = true
					dropdown.dropholder.drop.Container.Visible = true
					dropdown.dropholder.drop.search.Visible = true

					tweenservice:Create(dropdown, TweenInfo.new(1.34, Enum.EasingStyle.Quint), { Size = UDim2.new(1, -35, 0, 300) }):Play()
					tweenservice:Create(dropdown.dropholder.drop.UICorner, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { CornerRadius = UDim.new(0, 20) }):Play()
					tweenservice:Create(dropdown.dropholder.drop.Container, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(1, -20, 1, -75) }):Play()
					tweenservice:Create(dropdown.dropholder.drop.v0, TweenInfo.new(1.34, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.down, TweenInfo.new(0.35, Enum.EasingStyle.Quint), { Rotation = 180 }):Play()

					tweenservice:Create(dropdown.dropholder.drop.search, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.65 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 0.4 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.TextBox, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0.9 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.icon, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0.85 }):Play()

				end

				local function CloseDrop()
					DropOpen = false
					tweenservice:Create(dropdown, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(1, -35, 0, 95) }):Play()
					tweenservice:Create(dropdown.dropholder.drop.UICorner, TweenInfo.new(1, Enum.EasingStyle.Quint), { CornerRadius = UDim.new(1,0) }):Play()
					tweenservice:Create(dropdown.dropholder.drop.Container, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(0.33, -20, 0.576, -75) }):Play()
					tweenservice:Create(dropdown.dropholder.drop.v0, TweenInfo.new(1.34, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.down, TweenInfo.new(0.35, Enum.EasingStyle.Quint), { Rotation = 0 }):Play()

					tweenservice:Create(dropdown.dropholder.drop.search, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 1 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.TextBox, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
					tweenservice:Create(dropdown.dropholder.drop.search.icon, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()

					task.wait(0.6)
					dropdown.dropholder.drop.Container.Visible = false
					dropdown.dropholder.drop.search.Visible = false

				end

				dropdown.dropholder.drop.down.MouseButton1Click:Connect(function()
					if DeBounce then return end
					DeBounce = true

					if DropOpen then
						CloseDrop()
					else
						OpenDrop()
					end

					task.delay(1.2, function()
						DeBounce = false
					end)
				end)

				local function AddToSelected(option)
					if not SelectedOptions[option] then
						SelectedOptions[option] = true

						local originalIndex
						for i, opt in ipairs(data.Options) do
							if opt == option then
								originalIndex = i
								break
							end
						end

						local insertIndex = 1
						for i, selected in ipairs(SelectedOrder) do
							local selectedIndex = table.find(data.Options, selected)
							if selectedIndex and selectedIndex < originalIndex then
								insertIndex = i + 1
							else
								break
							end
						end
						table.insert(SelectedOrder, insertIndex, option)
					end
				end

				local function RemoveFromSelected(option)
					if SelectedOptions[option] then
						SelectedOptions[option] = nil
						for i = #SelectedOrder, 1, -1 do
							if SelectedOrder[i] == option then
								table.remove(SelectedOrder, i)
								break
							end
						end
					end

					local selectedContainer = dropdown.dropholder.drop.selectContainer.ScrollingFrame
					for _, child in ipairs(selectedContainer:GetChildren()) do
						if child:IsA("Frame") and child.Name == option then
							child:Destroy()
							break
						end
					end
				end

				local function UpdateSelectedText()
					local selectedContainer = dropdown.dropholder.drop.selectContainer.ScrollingFrame
					local placeholderText = dropdown.dropholder.drop.selected
					selectedContainer.Visible = data.Multi
					dropdown.dropholder.drop.selected.Visible = false


					if data.Multi then

						if #SelectedOrder == 0 then
							placeholderText.Visible = true
							selectedContainer.Visible = false
							return
						end


						-- Create chips for each selected option
						for _, option in ipairs(SelectedOrder) do
							-- Prevent duplicate pills
							if not selectedContainer:FindFirstChild(option) then
								local optionGroup = selectedContainer.result:Clone()
								optionGroup.Visible = true
								optionGroup.Name = option
								optionGroup.TextLabel.Text = option

								-- Set up remove button
								optionGroup.X.MouseButton1Click:Connect(function()
									RemoveFromSelected(option)
									UpdateSelectedText()

									-- Visually update the dropdown list
									for _, opt in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
										if opt:IsA("Frame") and opt.Name == option then
											tweenservice:Create(opt, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
											tweenservice:Create(opt, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
											tweenservice:Create(opt.Title, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
											tweenservice:Create(opt.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0.5}):Play()
											tweenservice:Create(opt.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {ImageTransparency = 0.9}):Play()
										end
									end

									if data.CallBack then
										data.CallBack(SelectedOrder)
									end
								end)

								optionGroup.Parent = selectedContainer

								-- Optional: auto-size width
								task.defer(function()
									local padding = 40
									local textWidth = optionGroup.TextLabel.TextBounds.X
									local totalWidth = textWidth + padding

									optionGroup.TextLabel.Size = UDim2.new(0, textWidth, 1, 0)

									tweenservice:Create(optionGroup, TweenInfo.new(0.67, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, totalWidth, 0, 20)}):Play()
								end)
							end
						end

					else
						-- Single option text fallback
						dropdown.dropholder.drop.selected.Visible = true
						if #SelectedOrder > 0 then
							dropdown.dropholder.drop.selected.Text = SelectedOrder[1]
						else
							dropdown.dropholder.drop.selected.Text = data.PlaceHolder
						end
					end
				end

				--[SEARCH]
				dropdown.dropholder.drop.search.TextBox:GetPropertyChangedSignal("Text"):Connect(function()
					local searchText = dropdown.dropholder.drop.search.TextBox.Text:lower()

					for _, option in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
						if option:IsA("Frame") and option:FindFirstChild("Title") then
							local optionText = option.Title.Text:lower()
							local isTemplate = option.Name == "Option"
							local shouldShow = not isTemplate and (searchText == "" or optionText:find(searchText, 1, true) or SelectedOptions[option.Title.Text])

							if shouldShow then
								option.Visible = true
								if SelectedOptions[option.Title.Text] then
									tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
									tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
									tweenservice:Create(option.Title, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
									tweenservice:Create(option.UIStroke, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
									tweenservice:Create(option.ImageLabel, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {ImageTransparency = 0}):Play()
								else
									tweenservice:Create(option, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
									tweenservice:Create(option, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
									tweenservice:Create(option.Title, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
									tweenservice:Create(option.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0.5}):Play()
									tweenservice:Create(option.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {ImageTransparency = 0.9}):Play()
								end
							else
								-- Hide with animation, but wait before setting Visible = false
								tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1}):Play()
								tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
								tweenservice:Create(option.Title, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
								tweenservice:Create(option.UIStroke, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
								tweenservice:Create(option.ImageLabel, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {ImageTransparency = 1}):Play()
								option.Visible = false
							end
						end
					end

					UpdateCustomLayout()
				end)



				local function SetDropdownOptions()
					local starterSet = false
					for _, OptionText in ipairs(data.Options) do
						local option = OptionButton:Clone()
						option.Title.Text = OptionText
						option.Parent = dropdown.dropholder.drop.Container
						option.Visible = true
						option.Name = OptionText

						if OptionText == data.StarterOption and not starterSet then
							starterSet = true
							dropdown.dropholder.drop.Selected.Text = OptionText
							SelectedOptions = {[OptionText] = true}
							SelectedOrder = {OptionText}

							tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
							tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0}):Play()
						end

						option.Interact.MouseButton1Click:Connect(function()
							if data.Multi then
								if SelectedOptions[OptionText] then
									RemoveFromSelected(OptionText)
									tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
									tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0.9}):Play()
								else
									AddToSelected(OptionText)
									tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
									tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0}):Play()
								end

								if data.CallBack then
									data.CallBack(SelectedOrder)
								end
							else
								dropdown.dropholder.drop.selected.Text = OptionText

								SelectedOptions = {[OptionText] = true}
								SelectedOrder = {OptionText}

								for _, opt in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
									if opt:IsA("Frame") then
										tweenservice:Create(opt, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
										tweenservice:Create(opt.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0.9}):Play()
									end
								end

								tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
								tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0}):Play()


								if data.CallBack then
									data.CallBack(OptionText)
								end


								CloseDrop()
							end

							UpdateSelectedText()

						end)
					end

					if not starterSet then
						dropdown.dropholder.drop.selected.Text = data.PlaceHolder
					end

					UpdateCustomLayout()
				end

				SetDropdownOptions()
			end

			function telement:Slider(Slider)
				local data = {
					Title = Slider.Title;
					Desc = Slider.Description;
					Sliders = Slider.Sliders
				}

				local slider = window.settings.pages.page.Slider:Clone()
				slider.Visible = true
				slider.Parent = Page
				slider.title.Text = data.Title
				slider.Name = data.Title
				slider.slideholder.slider.Visible = false


				--[SLIDERS INITIALIZE]
				for _, Options in ipairs(data.Sliders) do
					local Slider = window.settings.pages.page.Slider.slideholder.slider:Clone()

					Options = {
						Title = Options.Title or "Slider";
						Increment = Options.Increment or 1;
						Range = Options.Range or {0, 100};
						StarterValue = Options.StarterValue or 16;
						CallBack = Options.CallBack;
						SFlag = Options.SFlag;
						SettingsConfig = true;
					}

					Slider.Name = Options.Title
					Slider.Title.Text = Options.Title
					Options.Value = Options.StarterValue

					local dragging = false
					Slider.Visible = true
					Slider.Parent = slider.slideholder

					local SliderPosition
					if Options.StarterValue <= Options.Range[1] then
						SliderPosition = 0
					elseif Options.StarterValue >= Options.Range[2] then
						SliderPosition = 1
					else
						local range = Options.Range[2] - Options.Range[1]
						SliderPosition = (Options.StarterValue - Options.Range[1]) / range
					end


					Slider.slide.slideframe:TweenSize(UDim2.new(SliderPosition, 0, 1, 0), Enum.EasingDirection.Out, Enum.EasingStyle.Quint, 0.5, true)

					syde:registerLoadTween(
						Slider.slide.slideframe,
						{Size = UDim2.new(SliderPosition, 0, 1, 0)},
						{Size = UDim2.new(0, 100,1, 0)},
						TweenInfo.new(0.85, Enum.EasingStyle.Quint)
					)

					syde:replayLoadTweens(Slider.slide.slideframe)

					local decimalPlaces = tostring(Options.Increment):match("%.([^0]*)") and #tostring(Options.Increment):match("%.([^0]*)") or 0
					Slider.v.Text = string.format("<font size='14'>%." .. decimalPlaces .. "f</font><font color='#434343'>/%." .. decimalPlaces .. "f</font>", Options.StarterValue, Options.Range[2])

					local function BuildTicks(slide, options)
						local ticksFrame = slide:FindFirstChild("Ticks")
						if not ticksFrame then
							warn("❌ Missing Slider.slide.Ticks")
							return
						end

						local template = ticksFrame:FindFirstChild("tick")
						if not template then
							warn("❌ Missing Tick template inside Ticks")
							return
						end

						local min, max = options.Range[1], options.Range[2]
						local increment = options.Increment
						local range = max - min

						if range <= 0 or increment <= 0 then
							warn("❌ Invalid range/increment", range, increment)
							return
						end

						local tickCount = math.floor(range / increment) + 1
						if tickCount < 2 then return end

						-- wait for UI to size properly
						task.wait()

						local width = ticksFrame.AbsoluteSize.X
						local height = ticksFrame.AbsoluteSize.Y


						local spacing = width / (tickCount - 1)

						-- Reuse existing ticks instead of destroying all
						local existingTicks = {}
						for _, child in ipairs(ticksFrame:GetChildren()) do
							if child:IsA("Frame") and child ~= template then
								table.insert(existingTicks, child)
							end
						end

						-- Create new ticks if needed
						for i = 0, tickCount - 1 do
							local tick = existingTicks[i + 1] or template:Clone()
							tick.Visible = true
							tick.AnchorPoint = Vector2.new(0.5, 0.5)
							tick.BorderSizePixel = 0
							--	tick.BackgroundTransparency = 1
							tick.Parent = ticksFrame

							local finalPos = UDim2.fromOffset(i * spacing, height / 1.5)
							tweenservice:Create(
								tick,
								TweenInfo.new(0.35, Enum.EasingStyle.Quint, Enum.EasingDirection.Out),
								{
									Position = finalPos,
									BackgroundTransparency = 0.85
								}
							):Play()
						end

						-- Destroy extra ticks
						for i = tickCount + 1, #existingTicks do
							existingTicks[i]:Destroy()
						end

						--	print("✅ Created", tickCount, "ticks")
					end

					-- Connect AbsoluteSize change **only once**
					if Options.Increment > 4 then
						if not Slider.slide.Ticks:FindFirstChild("_ResizeConnection") then
							local conn = Slider.slide.Ticks:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
								BuildTicks(Slider.slide, Options)
							end)
							-- Tag the connection so we don't connect again
							local marker = Instance.new("BoolValue")
							marker.Name = "_ResizeConnection"
							marker.Parent = Slider.slide.Ticks
							marker:GetPropertyChangedSignal("Parent"):Connect(function()
								if not marker.Parent then
									conn:Disconnect()
								end
							end)
						end
					end




					local function UpdateSlider(x)
						if dragging then
							local sliderStart = Slider.slide.AbsolutePosition.X
							local sliderWidth = Slider.slide.AbsoluteSize.X
							local sliderPosition = (x - sliderStart) / sliderWidth
							sliderPosition = math.clamp(sliderPosition, 0, 1)

							local range = Options.Range[2] - Options.Range[1]
							local newValue = Options.Range[1] + sliderPosition * range
							newValue = math.floor((newValue - Options.Range[1]) / Options.Increment + 0.5) * Options.Increment + Options.Range[1]

							-- Update the slider visual position
							local snapPosition = (newValue - Options.Range[1]) / range
							Slider.slide.slideframe:TweenSize(UDim2.new(snapPosition, 0, 1, 0), Enum.EasingDirection.Out, Enum.EasingStyle.Quint, 0.55, true)


							-- Update the displayed value
							local decimalPlaces = tostring(Options.Increment):match("%.([^0]*)") and #tostring(Options.Increment):match("%.([^0]*)") or 0
							Slider.v.Text = string.format("<font size='14'>%." .. decimalPlaces .. "f</font><font color='#434343'>/%." .. decimalPlaces .. "f</font>", newValue, Options.Range[2])


							tweenservice:Create(Slider.Title, TweenInfo.new(0.55, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()

							local success, errorMsg = pcall(function()
								Options.CallBack(newValue)
							end)
							if not success then
								warn("[CALLBACK ERROR][" .. Slider.Name .. "]: " .. tostring(errorMsg))
							end

							Options.StarterValue = newValue
						end
					end

					Slider.slide.Interact.MouseButton1Down:Connect(function()
						dragging = true
					end)

					Slider.slide.Interact.MouseButton1Up:Connect(function()
						dragging = false
					end)

					syde:AddConnection(userinput.InputEnded, function(input, processed)
						if input.UserInputType == Enum.UserInputType.MouseButton1  or input.UserInputType == Enum.UserInputType.Touch then
							dragging = false
							tweenservice:Create(Slider.Title, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { TextTransparency = 0.6 }):Play()
						end
					end)

					syde:AddConnection(userinput.InputChanged, function(input)
						if dragging and input.UserInputType == Enum.UserInputType.MouseMovement  or input.UserInputType == Enum.UserInputType.Touch  then
							UpdateSlider(input.Position.X)
						end
					end)

					Slider.slide.slideframe.BackgroundColor3 = syde.theme.HitBox
					Slider.slide.slideframe.shadowHolder.ambientShadow.ImageColor3 = syde.theme.HitBox
					Slider.slide.slideframe.shadowHolder.penumbraShadow.ImageColor3 = syde.theme.HitBox
					Slider.slide.slideframe.shadowHolder.umbraShadow.ImageColor3 = syde.theme.HitBox
					slider.slideholder.Size = UDim2.new(1,-30,0,slider.slideholder.UIListLayout.AbsoluteContentSize.Y)
					local ss = slider.slideholder.UIListLayout.AbsoluteContentSize.Y
					slider.Size = UDim2.new(1,-35,0, ss  + 20)

					syde:AddConnection(syde.Comms.Event, function(p, color)
						if p == 'HitBox' then
							Slider.slide.slideframe.BackgroundColor3 = color
							Slider.slide.slideframe.shadowHolder.ambientShadow.ImageColor3 = color
							Slider.slide.slideframe.shadowHolder.penumbraShadow.ImageColor3 = color
							Slider.slide.slideframe.shadowHolder.umbraShadow.ImageColor3 = color
						end
					end)

					function Options:Set(NewVal, skipSave)
						local range = Options.Range[2] - Options.Range[1]

						-- snap value to increment (same logic as UpdateSlider)
						NewVal = math.floor((NewVal - Options.Range[1]) / Options.Increment + 0.5) * Options.Increment + Options.Range[1]

						local sliderPosition = (NewVal - Options.Range[1]) / range

						Slider.slide.slideframe:TweenSize(
							UDim2.new(sliderPosition, 0, 1, 0),
							Enum.EasingDirection.Out,
							Enum.EasingStyle.Quint,
							0.55,
							true
						)

						-- Register load tween
						syde:registerLoadTween(
							Slider.slide.slideframe,
							{Size = UDim2.new(sliderPosition, 0, 1, 0)},
							{Size = UDim2.new(0, 100, 1, 0)},
							TweenInfo.new(0.85, Enum.EasingStyle.Quint)
						)

						-- detect decimal places from increment
						local decimalPlaces = tostring(Options.Increment):match("%.([^0]*)")
							and #tostring(Options.Increment):match("%.([^0]*)")
							or 0

						-- update display (decimal safe)
						Slider.v.Text = string.format(
							"<font size='14'>%." .. decimalPlaces .. "f</font><font color='#434343'>/%." .. decimalPlaces .. "f</font>",
							NewVal,
							Options.Range[2]
						)

						-- Tween title appearance
						tweenservice:Create(Slider.Title, TweenInfo.new(0.55, Enum.EasingStyle.Exponential), {
							TextTransparency = 0
						}):Play()

						-- Callback
						local success, result = pcall(function()
							Options.CallBack(NewVal)
						end)

						if not success then
							warn(`[ Slider Error: { Slider.Name } ] Callback Error: { result }`)
						end

						Options.StarterValue = NewVal
					end

					if Options.SFlag then
						if Options.SFlag then
							syde.SettingsFlags[Options.SFlag] = Options
						end
					end

				end

				--[DESC]
				local descLabel = slider.slideholder:FindFirstChild("Desc")

				if descLabel then
					if data.Desc and data.Desc ~= "" then
						descLabel.Text = data.Desc
						descLabel.Visible = true
						descLabel.TextWrapped = true

						local function updateSize()
							local textSize = textservice:GetTextSize(
								descLabel.Text,
								descLabel.TextSize,
								descLabel.Font,
								Vector2.new(descLabel.AbsoluteSize.X, math.huge)
							)

							local newDescSize = UDim2.new(1, -150, 0, textSize.Y)
							local newButtonSize = UDim2.new(slider.Size.X.Scale, slider.Size.X.Offset, 0,slider.slideholder.AbsoluteSize.Y + slider.title.Size.Y.Offset + textSize.Y + 15) -- Adding extra padding

							local descTween = tweenservice:Create(descLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
							descTween:Play()

							local ToggleTween = tweenservice:Create(slider, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
							ToggleTween:Play()
						end

						updateSize()

						descLabel:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
					else
						descLabel.Visible = false
					end
				end
			end

			function telement:Paragraph(Paragraph)
				local ParaData = {
					Title = Paragraph.Title;
					Content = Paragraph.Content;
				}

				local Para = window.settings.pages.page.Paragraph:Clone()
				Para.Visible = true
				Para.Parent = Page
				Para.Frame.title.Text = ParaData.Title
				Para.Content.Text = ParaData.Content

				Para.Content.Size = UDim2.new(1, -20, 0, Para.Content.TextBounds.Y)
				--	Para.Size = UDim2.new(1, -35, 0, Para.Content.Size.Y.Offset + 200)

				local function updateSize()
					local textSize = textservice:GetTextSize(
						Para.Content.Text,
						Para.Content.TextSize,
						Para.Content.Font,
						Vector2.new(Para.Content.AbsoluteSize.X, math.huge) -- Allows vertical expansion
					)

					local newDescSize = UDim2.new(1, -20, 0, textSize.Y)
					local newButtonSize = UDim2.new(Para.Size.X.Scale, Para.Size.X.Offset, 0, textSize.Y + 120) -- Adding extra padding

					local descTween = tweenservice:Create(Para.Content, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
					descTween:Play()

					local buttonTween = tweenservice:Create(Para, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
					buttonTween:Play()
				end

				updateSize()

				Para.Content:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)

				local ParagraphSettings = {}

				function ParagraphSettings:Set(text, title)
					Para.Frame.title.Text = title
					Para.Content.Text = text
				end

				ParagraphSettings.Instance = Para

				return ParagraphSettings
			end

			function telement:TextInput(TextInput)
				local data = {
					Title = TextInput.Title or "Text Input",
					PlaceHolder = TextInput.PlaceHolder or "Enter text...",
					NumbersOnly = TextInput.NumberOnly or false,
					ClearOnLost = TextInput.ClearOnLost == nil and true or TextInput.ClearOnLost,
					--	MaxSize = TextInput.MaxSize or 100,
					CallBack = TextInput.CallBack,
				}

				local textinput =  window.settings.pages.page.Input:Clone()
				textinput.Visible = true
				textinput.Parent = Page
				textinput.Name = data.Title
				textinput.title.Text = data.Title
				textinput.TextFrame.TextBox.PlaceholderText = data.PlaceHolder

				local textBox = textinput.TextFrame.TextBox
				local defaultHeight = 32
				--	local maxHeight = data.MaxSize
				local ignoreNextClear = false



				textinput.TextFrame.Enter.MouseEnter:Connect(function()
					tweenservice:Create(textinput.TextFrame.Enter, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextColor3 = Color3.fromRGB(255, 255, 255)}):Play()
				end)

				textinput.TextFrame.Enter.MouseLeave:Connect(function()
					tweenservice:Create(textinput.TextFrame.Enter, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextColor3 = Color3.fromRGB(40, 40, 40)}):Play()
				end)

				textBox:GetPropertyChangedSignal("Text"):Connect(function()
					if data.NumbersOnly then
						textBox.Text = textBox.Text:gsub("%D", "")
					end

					textBox.Size = UDim2.new(1, -60, 0, defaultHeight + 40)

					local textSize = game:GetService("TextService"):GetTextSize(
						textBox.Text, textBox.TextSize, textBox.Font, Vector2.new(textBox.AbsoluteSize.X, math.huge)
					)

					if textBox.Text == "" then
						textBox.Size = UDim2.new(1, -60, 0, math.max(defaultHeight))
					else
						local newHeight = math.min(textSize.Y + 18, 120 + 50)
						textBox.Size = UDim2.new(1, -60, 0, newHeight)

					end

				end)

				textinput.TextFrame:GetPropertyChangedSignal("Size"):Connect(function()
					local newHeight = textinput.TextFrame.Size.Y.Offset
					local extraHeight = 32




					tweenservice:Create(
						textinput,
						TweenInfo.new(0.7, Enum.EasingStyle.Quint),
						{ Size = UDim2.new(1, -35, 0, newHeight + extraHeight + 35) }
					):Play()

					--	tweenservice:Create(textinput.ImageLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quart), { Position = UDim2.new(1, -20,1, -15) }):Play()


				end)

				textBox:GetPropertyChangedSignal("Size"):Connect(function()
					local newHeight = textBox.Size.Y.Offset
					local totalHeight = math.max(newHeight, defaultHeight)

					tweenservice:Create(
						textinput.TextFrame,
						TweenInfo.new(0.7, Enum.EasingStyle.Quint),
						{ Size = UDim2.new(1, -60, 0, totalHeight + 0) }
					):Play()


				end)

				local function ProcessInput(text)
					local success, errorMsg = pcall(function()
						data.CallBack(text)
					end)
					if not success then
						warn("Error in TextInput callback [" .. textinput.Name .. "]: " .. tostring(errorMsg))
					end
				end

				textBox.FocusLost:Connect(function(enterPressed)
					if not enterPressed then return end

					local success, errorMsg = pcall(function()
						data.CallBack(textBox.Text)
					end)
					if not success then
						warn("Error in TextInput callback [" .. textinput.Name .. "]: " .. tostring(errorMsg))
					end

					if data.ClearOnLost then
						task.defer(function()
							textBox.Text = ""
							textBox.Size = UDim2.new(1, -60, 0, math.max(defaultHeight))
						end)
					else
						textBox.ClearTextOnFocus = false
					end
				end)

				textinput.TextFrame.Enter.MouseButton1Click:Connect(function()
					local success, errorMsg = pcall(function()
						data.CallBack(textBox.Text)
					end)
					if not success then
						warn("Error in TextInput callback [" .. textinput.Name .. "]: " .. tostring(errorMsg))
					end

					if data.ClearOnLost then
						task.defer(function()
							textBox.Text = ""
							textBox.Size = UDim2.new(1, -60, 0, math.max(defaultHeight))
						end)
					else
						textBox.ClearTextOnFocus = false
					end
				end)


			end

			return telement

		end

		--@@SettingInit

		local a = settings:inittab({Title = 'Theme'})
		local b = settings:inittab({Title = 'Privacy'})
		local c = settings:inittab({Title = 'Info'})

		a:Keybind({
			Title = 'Toggle UI',
			Key = uitoggle,
			OnKeyChanged = function(newKey)
				uitoggle = newKey
				print(newKey)
			end,
			CallBack = function()
				ToggleUI()
			end,
		})

		a:ColorPicker({
			Title = 'Accent',
			RD = false,
			Linkable = true,
			Color = syde.theme.Accent;
			CallBack = function(v)
				syde:UpdateTheme({
					['Accent'] = v
				})
			end,
			SFlag = 'AC'
		})

		a:ColorPicker({
			Title = 'Hitbox',
			RD = false,
			Linkable = true,
			Color = syde.theme.HitBox;
			CallBack = function(c)
				syde:UpdateTheme({
					['HitBox'] = c
				})
			end,
			SFlag = 'HB'
		})

		local seq = syde.theme.DropShadow
		local k = seq.Keypoints

	--[[	a:ColorPicker({
			Title = 'Dropshadow';
			Linkable = true;
			Type = 'Gradient';

			Color  = k[1].Value;
			Color2 = k[#k].Value;

			GradientPath = window.shadow.ImageLabel.UIGradient;

			CallBack = function(value)
				local seq

				if typeof(value) == "ColorSequence" then
					seq = value
				elseif typeof(value) == "Color3" then
					seq = ColorSequence.new(value)
				else
					warn("Invalid DropShadow value:", typeof(value))
					return
				end

				syde:UpdateTheme({
					DropShadow = seq
				})
			end;
			SFlag = 'DS'
		})]]

		local rotateGradient = false
		local rotating = false

		local function startGradientRotation()
			if rotating then return end
			rotating = true

			task.spawn(function()
				local grad = window.shadow.ImageLabel.UIGradient
				local rotation = 0
				while rotateGradient and grad and grad.Enabled do
					rotation = (rotation + 1) % 360
					grad.Rotation = rotation
					task.wait() -- adjust speed if you want
				end
				rotating = false
			end)
		end

		a:Toggle({
			Title = 'Rotate Gradient',
			Description = 'Slowly rotates the gradient if enabled.',
			Value = false,
			CallBack = function(v)
				rotateGradient = v
				local grad = window.shadow.ImageLabel.UIGradient

				if rotateGradient and grad and grad.Enabled then
					startGradientRotation()
				end
			end,
			SFlag = 'RG',
		})

		a:Toggle({
			Title = 'Glow',
			Description = 'Shine on the ui.',
			CallBack = function (v)
				if v then
					glow = true
					for i, glow in pairs(window.clipframe:GetChildren()) do
						if glow:IsA("ImageLabel") then
							tweenservice:Create(glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 0.8}):Play()
						end
					end
					window.pages.v0.Visible = false

					window.pages.clipframe.v1.Visible = false
					window.pages.clipframe.v1.Visible = false

					--		window.shadow.ImageLabel.Visible = false
					window.shadow.glow.Visible = true
					window.shadow.glow1.Visible = true

				else
					glow = false
					for i, glow in pairs(window.clipframe:GetChildren()) do
						if glow:IsA("ImageLabel") then
							tweenservice:Create(glow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential),{ImageTransparency = 1}):Play()
						end
					end

					--	window.shadow.ImageLabel.Visible = true
					window.shadow.glow.Visible = false
					window.shadow.glow1.Visible = false

					if bluron then
						window.pages.v0.Visible = false
					else
						window.pages.v0.Visible = true
						window.pages.clipframe.v1.Visible = true
						window.pages.clipframe.v1.Visible = true
					end
				end
			end,
			SFlag = 'GLW',
		})

		a:Toggle({
			Title = 'Blur',
			Description = 'Make sure your graphics are above 8.',
			CallBack = function (v)
				if v then
					window.shadow.ImageLabel.Visible = false
					window.BackgroundTransparency = 0.45

					window.pages.v1.Visible = false
					window.pages.v0.Visible = false

					window.pages.clipframe.v1.Visible = false
					window.pages.clipframe.v0.Visible = false

					syde:BindFrame(window, {
						Transparency = 0.98;
						BrickColor = BrickColor.new('Institutional white');
					})

					local dof = Instance.new('DepthOfFieldEffect')
					dof.Parent = game.Lighting
					dof.Enabled = true
					dof.FocusDistance = 51.6
					dof.InFocusRadius = 50
					dof.NearIntensity = 1
					dof.FarIntensity = 0

					bluron = true

				else
					window.shadow.ImageLabel.Visible = true
					window.BackgroundTransparency = 0

					window.pages.v1.Visible = true
					window.pages.v0.Visible = true

					window.pages.clipframe.v1.Visible = true
					window.pages.clipframe.v0.Visible = true

					syde:UnbindFrame(window)

					bluron = false
				end
			end,
			SFlag = 'BLUR',
		})


		a:Slider({
			Title = 'Modifiers',
			Sliders = {
				{
					Title = 'DS Density',
					Range = {0, 1},
					Increment = 0.1,
					StarterValue = window.shadow.ImageLabel.ImageTransparency,
					CallBack = function(v)
						tweenservice:Create(window.shadow.ImageLabel, TweenInfo.new(0.65, Enum.EasingStyle.Exponential), {ImageTransparency = v}):Play()
					end,
					SFlag = 'GDensity',
					SettingConfig = true
				},
				{
					Title = 'Drag Smoothness',
					Range = {0, 1},
					Increment = 0.1,
					StarterValue = dragSpeed,
					CallBack = function(v)
						dragSpeed = v
						print(dragSpeed)
					end,
					SFlag = 'DSmoothness',
					SettingConfig = true
				},
			}
		})

		a:Toggle({
			Title = 'Wallpaper';
			Description = 'Displays personalized wallpaper';
			Value = LockToScreen,
			CallBack = function (v)
				if v then
					window.wallpaper.Visible = true
					window.pages.clipframe.v0.Visible = false
					window.pages.clipframe.v1.Visible = false

					window.pages.v0.Visible = false
					window.pages.v1.Visible = false
					window.wallpaper.ison.Value = true
				else
					window.wallpaper.Visible = false

					window.wallpaper.ison.Value = false

					if bluron then
						window.pages.clipframe.v0.Visible = false
						window.pages.clipframe.v1.Visible = false
						window.pages.v0.Visible = false
						window.pages.v1.Visible = false
					else
						window.pages.clipframe.v0.Visible = true
						window.pages.clipframe.v1.Visible = true

						window.pages.v0.Visible = true
						window.pages.v1.Visible = true
					end
				end
			end,
			SFlag = 'WALLP',
		})

		a:TextInput({
			Title = 'Wallpaper ID';
			NumberOnly = true;
			PlaceHolder = 'Input your wallpaper ID here.';
			CallBack = function (v)
				if v then
					window.wallpaper.Image = 'rbxassetid://'..v
					syde:Toast({
						Content = 'Wallpaper applied.'
					})
				end
			end
		})


		a:Toggle({
			Title = 'LockToScreen',
			Description = 'Prevents UI from moving off screen.',
			Value = LockToScreen,
			CallBack = function (v)
				LockToScreen = v
			end,
			SFlag = 'LS'
		})


		--// SERVICES
		local HttpService = game:GetService("HttpService")

		--// CONFIG
		local isDev = false
		local baseUrl = isDev and "http://localhost:3000" or "https://syde-auth.vercel.app"
		local loginUrl = baseUrl .. "/api/login"
		local VERIFY_ENDPOINT = baseUrl .. "/api/verify?id="

		--// STATE
		local currentDiscordId = nil
		local lastCheck = 0
		local debounceTime = 1.5 -- seconds

		--// FUNCTION: open URL safely
		local function openURL(url)
			local success = false
			pcall(function()
				if syn and syn.openurl then
					syn.openurl(url)
					success = true
				elseif getgenv().is_sirhurt_closure then
					game:GetService("GuiService"):OpenBrowserWindow(url)
					success = true
				elseif KRNL_LOADED then
					setclipboard(url)
					success = true
				end
			end)

			if not success and setclipboard then
				setclipboard(url)
				syde:Notify({
					Title = "Link Copied",
					Content = "OAuth link copied to clipboard. Paste in your browser.",
					Duration = 5
				})
			end
		end

		--// BUTTON: Open OAuth
		b:Button({
			Title = "Connect Discord",
			Description = "Authenticate your Discord account.",
			CallBack = function()
				openURL(loginUrl)
			end,
		})

		local function verifyDiscord(id)
			-- Try Roblox GetAsync first
			if HttpService.HttpEnabled then
				local ok, res = pcall(function()
					return HttpService:GetAsync(VERIFY_ENDPOINT .. id, true)
				end)
				if ok and res then
					local decodedOk, decoded = pcall(function()
						return HttpService:JSONDecode(res)
					end)
					if decodedOk and type(decoded) == "table" and decoded.verified then
						return true, decoded.discordUsername or nil
					end
				end
				return false, nil
			end

			-- Fallback: executor HTTP
			local success, result = pcall(function()
				if syn and syn.request then
					local r = syn.request({ Url = VERIFY_ENDPOINT .. id, Method = "GET" })
					local decoded = HttpService:JSONDecode(r.Body)
					if decoded.verified then
						return decoded.discordUsername or nil
					end
				elseif request then
					local r = request({ Url = VERIFY_ENDPOINT .. id, Method = "GET" })
					local decoded = HttpService:JSONDecode(r.Body)
					if decoded.verified then
						return decoded.discordUsername or nil
					end
				end
				return nil
			end)

			if success and result then
				return true, result
			end

			return false, nil
		end

		--// INPUT: Discord ID verification
		b:TextInput({
			Title = "Discord ID",
			PlaceHolder = "Paste your Discord ID after verifying",
			ClearOnLost = false,
			CallBack = function(v)
				currentDiscordId = v

				if not currentDiscordId or currentDiscordId == "" then
					window.user.headshot.Status.BackgroundColor3 = Color3.fromRGB(255, 101, 104)
					return
				end

				-- Debounce
				if tick() - lastCheck < debounceTime then
					return
				end
				lastCheck = tick()

				-- Show checking
				window.user.headshot.Status.BackgroundColor3 = Color3.fromRGB(255, 238, 49)

				task.spawn(function()
					local verified, discordUsername = verifyDiscord(currentDiscordId)
					if verified then
						window.user.headshot.Status.BackgroundColor3 = Color3.fromRGB(59, 255, 29)
						if discordUsername then
							window.user.headshot.id.username.Text = discordUsername
						end
						syde:Notify({
							Title = "Success",
							Content = "Discord verified successfully",
							Duration = 4
						})
					else
						window.user.headshot.Status.BackgroundColor3 = Color3.fromRGB(255, 101, 104)
						syde:Notify({
							Title = "Verification Failed",
							Content = "Discord ID is not verified",
							Duration = 4
						})
					end
				end)
			end,
		})


		function syde:SaveSettingsConfig()
			local Data = {}


			for flag, v in pairs(syde.SettingsFlags or {}) do

				if v.Type == "ColorPicker" and v.Color then
					Data[flag] = syde:ColorPack(v.Color)
				elseif v.V ~= nil then
					Data[flag] = v.V
				elseif v.StarterValue ~= nil then
					Data[flag] = v.StarterValue
				else
					warn("[DEBUG] Skipping flag", flag, "no valid value found")
				end
			end


			local path = string.format("%s/SettingsConfig.lua", syde.ConfigFolder)
			local encoded = https:JSONEncode(Data)

			writefile(path, encoded)

			syde:Toast({
				Content = 'Saved setting config';
				Duration = 3
			})
		end

		function syde:LoadSettingsConfig()
			local path = string.format("%s/SettingsConfig.lua", syde.ConfigFolder)

			if not isfile(path) then

				syde:Toast({
					Content = 'No settings found';
					Duration = 3
				})
				return
			end

			local success, data = pcall(function()
				return https:JSONDecode(readfile(path))
			end)

			if not success or typeof(data) ~= "table" then
				warn("[DEBUG] Failed to decode settings:", data)
				return
			end

			for flag, val in pairs(data) do
				local setting = syde.SettingsFlags and syde.SettingsFlags[flag]
				if setting then
					if setting.Set then
						setting:Set(val)
					elseif setting.Type == "ColorPicker" and setting.Color then
						setting.Color = syde:ColorUnpack(val)
					elseif setting.V ~= nil then
						setting.Value = val
					end
				else
					warn("[DEBUG] No matching setting flag found for:", flag)
				end
			end

			syde:Toast({
				Content = 'Loaded setting config';
				Duration = 3
			})
		end

		a:Button({
			Title = 'Save',
			Description = 'Save all setting configurations.',
			CallBack = function ()
				syde:SaveSettingsConfig()
			end
		})
		a:Button({
			Title = 'Load',
			Description = 'Load all setting configurations.',
			CallBack = function ()
				syde:LoadSettingsConfig()
			end
		})

		b:Toggle({
			Title = 'Anonymous',
			Description = 'Hides your info in User Info.',
			CallBack = function (v)
				if v then
					window.user.headshot.id.username.Text = '?'
					window.user.headshot.id.displayname.Text = '@?'
					window.user.headshot.Image = 'rbxassetid://139956761561818'
				else
					SetUserInfo()
				end
			end,
			SFlag = 'ANON',
		})

		c:Paragraph({
			Title = 'Status',
			Content = 'Your Up To Date!'
		})


		local startTime = tick()

		local uptimeParagraph = c:Paragraph({
			Title = 'Session UpTime',
			Content = 'Calculating...'
		})

		local function formatTime(seconds)
			local days = math.floor(seconds / 86400)
			seconds = seconds % 86400
			local hours = math.floor(seconds / 3600)
			seconds = seconds % 3600
			local minutes = math.floor(seconds / 60)
			seconds = math.floor(seconds % 60)

			return string.format("%02d:%02d:%02d:%02d", days, hours, minutes, seconds)
		end

		local startTime = tick()

		ss = syde:AddConnection(runservice.Heartbeat, function()
			local uptime = tick() - startTime
			local formatted = formatTime(uptime)
			uptimeParagraph:Set("Session Uptime: " .. formatted, 'Session UpTime')
		end)

	end


	workspace.CurrentCamera:GetPropertyChangedSignal("ViewportSize"):Connect(function()
		screenSize = workspace.CurrentCamera.ViewportSize
		isMobile = userinput.TouchEnabled
		updateLayout()
	end)

	updateLayout()

	camera:GetPropertyChangedSignal("ViewportSize"):Connect(updateLayout)
	userinput:GetPropertyChangedSignal("TouchEnabled"):Connect(updateLayout)

	--@@Tabs
	local tbdata = {
		first = false,
		selected = false
	}

	function tbdata:InitTab(tab)
		-- bootstrap Home-mode once so first-created tabs don't auto-open

		if Data.Home.Enabled then
			if not tbdata.__homeBootstrapped then
				tbdata.__homeBootstrapped = true
				tbdata.first = "Home"
				tbdata.homeActive = true
				-- hide all normal pages on boot
				for _, temp in ipairs(pages:GetChildren()) do
					if temp:IsA("ScrollingFrame") then
						temp.Visible = false
					end
				end
				-- ensure homepage is visible if present
				if window and window.pages and window.pages.home then
					window.pages.home.Visible = true
				end
			end
		end


		local isFirstTab = not tbdata.first 

		local tdata = {
			Title = tab.Title;
			Locked = tab.Locked or false;
			Key = tab.Key;
		}

		local LockedFrames = {}

		--[Tab Setup]
		local Tab = tabs.btn:Clone()
		Tab.Visible = true
		Tab.Parent = tabs
		Tab.title.Text = tdata.Title
		Tab.Name = tdata.Title

		Tab.title.TextTransparency = 1
		Tab.indicator.BackgroundTransparency = 1

		--[Page Setup]
		local Page = pages.page:Clone()
		Page.Visible = false
		Page.Parent = pages
		Page.Name = tdata.Title

		local defaultParent = Page 

		local function setInternalParent(newParent)
			defaultParent = newParent
		end

		for _, temp in ipairs(Page:GetChildren()) do
			if temp:IsA("Frame") then
				temp:Destroy()
			end
		end


		Page.ChildAdded:Connect(function(child)
			child:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
				syde:updateLayout(Page, 7) 
			end)
			child:GetPropertyChangedSignal("Visible"):Connect(function()
				syde:updateLayout(Page, 7)
			end)
			syde:updateLayout(Page, 7)
		end)

		Page.ChildRemoved:Connect(function()
			syde:updateLayout(Page, 7)
		end)

		Page:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
			syde:updateLayout(Page, 7)
		end)

		syde:updateLayout(Page, 7)



		local function ChangeName(Name)
			tweenservice:Create(pages.clipframe.title, TweenInfo.new(0), { TextTransparency = pages.clipframe.title.TextTransparency }):Play()
			tweenservice:Create(pages.clipframe.title, TweenInfo.new(0), { Position = pages.clipframe.title.Position }):Play()

			local fadeOut = tweenservice:Create(pages.clipframe.title, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), { TextTransparency = 1 })
			local moveUp = tweenservice:Create(pages.clipframe.title, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { Position = UDim2.new(0, 5,0.5, -25) })

			fadeOut:Play()
			moveUp:Play()
			task.wait(0.2)

			pages.clipframe.title.Position = UDim2.new(0, 5,0.5, 25)

			pages.clipframe.title.Text = Name

			local moveDown = tweenservice:Create(pages.clipframe.title, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { Position = UDim2.new(0, 5,0.5, 0) })
			local fadeIn = tweenservice:Create(pages.clipframe.title, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { TextTransparency = 0 })

			moveDown:Play()
			fadeIn:Play()
		end

		if isFirstTab then
			ChangeName(tdata.Title)
			Page.Visible = true
			tbdata.first = tdata.Title
		end

		if tbdata.first then
			tweenservice:Create(Tab.title, TweenInfo.new(2, Enum.EasingStyle.Exponential), { TextTransparency = 0.52 }):Play()
			tweenservice:Create(Tab, TweenInfo.new(2, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.45 }):Play()
			tweenservice:Create(Tab.indicator, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
			tweenservice:Create(Tab.indicator.glow, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
			tweenservice:Create(Tab, TweenInfo.new(2, Enum.EasingStyle.Quart), { Size = UDim2.new(0, Tab.title.TextBounds.X + 30,0, 35) }):Play()
			--	tweenservice:Create(Tab.indicator.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
		else
			tbdata.first = tdata.Title
			tweenservice:Create(Tab.title, TweenInfo.new(2, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
			tweenservice:Create(Tab, TweenInfo.new(2, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0 }):Play()
			tweenservice:Create(Tab.indicator, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0 }):Play()
			tweenservice:Create(Tab.indicator, TweenInfo.new(2, Enum.EasingStyle.Exponential), { BackgroundColor3 = syde.theme.Accent }):Play()
			tweenservice:Create(Tab.indicator.glow, TweenInfo.new(2, Enum.EasingStyle.Exponential), { ImageColor3 = syde.theme.Accent }):Play()
			tweenservice:Create(Tab, TweenInfo.new(2, Enum.EasingStyle.Quart), { Size = UDim2.new(0, Tab.title.TextBounds.X + 80,0, 35) }):Play()
			--	tweenservice:Create(Tab.indicator.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0.6 }):Play()
		end


		local positionTweenInfo = TweenInfo.new(0.7, Enum.EasingStyle.Quart)
		local colorTweenInfo = TweenInfo.new(0.3, Enum.EasingStyle.Exponential)
		local HomeButton = (window and window.tabs and window.tabs.Home) and window.tabs.Home or nil
		local HomePage = (window and window.pages and window.pages.home) and window.pages.home or nil

		local function ApplyHomeButtonStyle(isActive)
			if not HomeButton or not HomeButton.homeicon:FindFirstChild("ImageLabel") then
				return
			end

			if isActive then
				--	tweenservice:Create(HomeButton.text, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
				tweenservice:Create(HomeButton.homeicon, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.45 }):Play()
				tweenservice:Create(HomeButton.homeicon.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0 }):Play()
			else
				--	tweenservice:Create(HomeButton.text, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 0.67 }):Play()
				tweenservice:Create(HomeButton.homeicon, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.85 }):Play()
				tweenservice:Create(HomeButton.homeicon.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0.67 }):Play()
			end
		end

		local isInit = true

		local function ApplyTabStyle(tabButton, isSelected)
			local targetTextTransparency = isSelected and 0 or 0.6
			local targetBackgroundTransparency = isSelected and 0 or 0.45
			local targetTransparency = isSelected and 0 or 1
			local targetColor = isSelected and syde.theme.Accent or Color3.fromRGB(29, 29, 29)
			local targetSize = isSelected and UDim2.new(0, tabButton.title.TextBounds.X + 80,0, 35) or UDim2.new(0, tabButton.title.TextBounds.X + 50,0, 35)


			if isInit then
				task.spawn(function()
					for _, v in ipairs(tabs:GetChildren()) do
						if v:IsA("Frame") then
							tweenservice:Create(v, TweenInfo.new(0.75, Enum.EasingStyle.Quart), { Size = UDim2.new(0, v.title.TextBounds.X + 100,0, 30) }):Play()
							task.wait(0.15)
							tweenservice:Create(tabButton, TweenInfo.new(0.75, Enum.EasingStyle.Quart), { Size = targetSize }):Play()
							isInit = false
						end
					end
				end)

			end


			tweenservice:Create(tabButton, positionTweenInfo, { Size = targetSize }):Play()
			tweenservice:Create(tabButton, colorTweenInfo, { BackgroundTransparency = targetBackgroundTransparency, }):Play()
			tweenservice:Create(tabButton.title, colorTweenInfo, { TextTransparency = targetTextTransparency }):Play()
			tweenservice:Create(tabButton.indicator.glow, colorTweenInfo, { ImageColor3 = targetColor }):Play()
			tweenservice:Create(tabButton.indicator.glow, colorTweenInfo, { ImageTransparency = isSelected and 0.78 or 1 }):Play()

			tweenservice:Create(tabButton.indicator, colorTweenInfo, { BackgroundColor3 = targetColor }):Play()
			tweenservice:Create(tabButton.indicator, colorTweenInfo, { BackgroundTransparency = isSelected and 0 or 1 }):Play()


		end
		ApplyTabStyle(Tab, isFirstTab)

		if Data.Home.Enabled then
			ApplyTabStyle(Tab, false)
		else
			ApplyTabStyle(Tab, isFirstTab)
		end

		local function ShowHome()
			tbdata.homeActive = true
			tbdata.first = "Home"

			for _, otherPage in ipairs(pages:GetChildren()) do
				if otherPage:IsA("ScrollingFrame") then
					otherPage.Visible = false
				end
			end

			for _, otherTab in ipairs(tabs:GetChildren()) do
				if otherTab:IsA("Frame") then
					ApplyTabStyle(otherTab, false)
					otherTab.interact.Active = true
				end
			end

			if HomePage then
				HomePage.Visible = true
				pcall(function() tweenservice:Create(HomePage, TweenInfo.new(0.45, Enum.EasingStyle.Quint), { BackgroundTransparency = 1 }):Play() end)
			end

			ApplyHomeButtonStyle(true)
			window.pages.clipframe.Visible = false
			--	window.pages.v0.Visible = false
			--	window.pages.v1.Visible = false
		end

		local function HideHomeForTab()
			tbdata.homeActive = false

			if HomePage and HomePage.Visible then
				-- hide immediately to prevent overlap flicker
				HomePage.Visible = false  

				-- optional: still tween background transparency for smoothness
				pcall(function() 
					HomePage.BackgroundTransparency = 1 
				end)
			end

			ApplyHomeButtonStyle(false)
			window.pages.clipframe.Visible = true
			--	window.pages.v0.Visible = true
			--	window.pages.v1.Visible = true
		end

		if tbdata.first == 'Home' then
			ShowHome()
		end

		-- Hook Home button click once (if present)
		if HomeButton and HomeButton.homeicon:FindFirstChild("interact") and not tbdata.__homeHooked then
			tbdata.__homeHooked = true
			HomeButton.homeicon.interact.MouseButton1Click:Connect(function()
				if tbdata.homeActive then return end 

				-- Force-hide all locked pages
				local lockedFolder = pages:FindFirstChild("lockedpages")
				if lockedFolder then
					for _, lockedPage in ipairs(lockedFolder:GetChildren()) do
						if lockedPage:IsA("TextButton") then
							lockedPage.Visible = false
						end
					end
				end

				ShowHome()
			end)

		end

		Tab.interact.MouseButton1Click:Connect(function()
			if tbdata.first == tdata.Title then return end 

			-- Hide Home if active
			if Data.Home.Enabled then
				if tbdata.homeActive then
					HideHomeForTab()
				end
			end


			local previous = tbdata.first
			tbdata.first = tdata.Title

			-- Check if both old + new are InitTab tabs
			local prevPage = pages:FindFirstChild(previous)
			local newPage  = pages:FindFirstChild(tdata.Title)

			if prevPage and newPage then
				-- both are regular tabs → animate
				ChangeName(tdata.Title)
			else
				-- otherwise just snap
				pages.clipframe.title.Text = tdata.Title
			end

			-- Hide all pages
			for _, otherPage in ipairs(pages:GetChildren()) do
				if otherPage:IsA("ScrollingFrame") then
					otherPage.Visible = false
				end
			end

			Page.Visible = true
			tbdata.first = tdata.Title

		--[[	if TabData.Locked == true then
				if lockedframe and lockedframe.Name == TabData.Title then
					lockedframe.Visible = true
					for _, v in pairs(WINDOW.Pages.lockedpages:GetChildren()) do
						if v.Name ~= TabData.Title then
							v.Visible = false
						end
					end
				end
				currentLockedTabData = TabData
			else
				for _, v in pairs(WINDOW.Pages.lockedpages:GetChildren()) do
					if v then
						v.Visible = false
					end
				end
			end]]

			syde:replayLoadTweens()

			for _, otherTab in ipairs(tabs:GetChildren()) do
				if otherTab:IsA("Frame") then
					ApplyTabStyle(otherTab, otherTab == Tab)
					otherTab.interact.Active = true
				end
			end

		end)

		syde:AddConnection(syde.Comms.Event, function(p, color)
			if p == 'Accent' then
				if tbdata.first ~= tdata.Title then return end

				-- live accent update
				tweenservice:Create(Tab.indicator, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), {
					BackgroundColor3 = color
				}):Play()

				tweenservice:Create(Tab.indicator.glow, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), {
					ImageColor3 = color
				}):Play()
			end
		end)

		local function SwitchToTab(tabName)
			local selectedTab
			local targetPage

			-- find tab
			for _, tab in ipairs(tabs:GetChildren()) do
				if tab:IsA("Frame") and tab.Name == tabName then
					selectedTab = tab
					break
				end
			end

			-- find page
			targetPage = pages:FindFirstChild(tabName)
			if not (selectedTab and targetPage) then
				warn("[Syde] SwitchToTab failed:", tabName)
				return
			end

			-- already selected
			if tbdata.first == tabName then
				return
			end

			-- update title (same logic as click)
			ChangeName(tabName)

			-- hide all pages
			for _, page in ipairs(pages:GetChildren()) do
				if page:IsA("ScrollingFrame") then
					page.Visible = false
				end
			end

			-- show page
			targetPage.Visible = true
			tbdata.first = tabName

			-- update tab styles
			for _, tab in ipairs(tabs:GetChildren()) do
				if tab:IsA("Frame") then
					ApplyTabStyle(tab, tab == selectedTab)
					tab.interact.Active = true
				end
			end

			-- replay load tweens like normal click
			syde:replayLoadTweens()

			return targetPage
		end



		local Pages = ui.main.pages
		local Results = window.search.Container
		local Template = Results.option

		local activeResults = {}
		local searchDebounce = 0

		local function getFunctionType(frame)
			local attr = frame:GetAttribute("FunctionType")
			if typeof(attr) == "string" then
				return attr
			end
			return "Function"
		end

		local function clearResults()
			for _, v in ipairs(Results:GetChildren()) do
				if v:IsA("Frame") and v ~= Template then
					v:Destroy()
				end
			end
			table.clear(activeResults)
		end

		local function createResult(page, func)
			local key = func:GetFullName() -- unique string key
			if activeResults[key] then return end
			activeResults[key] = true

			local result = Template:Clone()
			result.Visible = true
			result.Parent = Results

			result.info.title.Text = func.Name
			result.info.badge["function"].Text = getFunctionType(func)
			result.info.badge.Size = UDim2.new(0, result.info.badge["function"].TextBounds.X + 20,0, 20)
			result.interact.MouseButton1Click:Connect(function()
				-- Ensure we always have the opened page, even if already on it

				closesearch()

				local openedPage = ui.main.pages:FindFirstChild(page.Name)
				if not openedPage or not openedPage:IsA("ScrollingFrame") then return end

				-- Optional: switch tab visuals (if SwitchToTab does this)
				SwitchToTab(page.Name)

				task.wait(0.05) -- small delay to allow UI to update

				-- Calculate scroll position
				local y = func.AbsolutePosition.Y - openedPage.AbsolutePosition.Y + openedPage.CanvasPosition.Y

				-- Scroll to the function
				tweenservice:Create(
					openedPage,
					TweenInfo.new(0.6, Enum.EasingStyle.Exponential, Enum.EasingDirection.Out),
					{ CanvasPosition = Vector2.new(0, math.max(0, y - 20)) }
				):Play()

				-- Highlight flash
				local original = func.BackgroundColor3
				tweenservice:Create(func, TweenInfo.new(0.2), {
					BackgroundColor3 = syde:GetLighter(original, 0.03)
				}):Play()

				task.delay(0.35, function()
					tweenservice:Create(func, TweenInfo.new(0.35), {
						BackgroundColor3 = original
					}):Play()
				end)
			end)

			result.MouseEnter:Connect(function()
				tweenservice:Create(result.ImageLabel, TweenInfo.new(0.2), {
					ImageColor3 = Color3.fromRGB(255, 255, 255)
				}):Play()

				--	tweenservice:Create(result.UIStroke, TweenInfo.new(0.2), {Thickness = 1}):Play()
			end)

			result.MouseLeave:Connect(function()
				tweenservice:Create(result.ImageLabel, TweenInfo.new(0.2), {
					ImageColor3 = Color3.fromRGB(130, 130, 130)
				}):Play()
				--	tweenservice:Create(result.UIStroke, TweenInfo.new(0.2), {Thickness = 0}):Play()
			end)

			-- tweenservice:Create(result, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
			tweenservice:Create(result.info.badge, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
			tweenservice:Create(result.info.title, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
			tweenservice:Create(result.info.badge["function"], TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
		end

		local function searchFunctions(query)
			searchDebounce += 1
			local thisSearch = searchDebounce

			task.delay(0.05, function()
				if thisSearch ~= searchDebounce then return end

				clearResults()
				query = query:lower()
				if query == "" then return end


				for _, page in ipairs(Pages:GetChildren()) do
					if page:IsA("ScrollingFrame") then
						for _, child in ipairs(page:GetChildren()) do
							if child:IsA("Frame") and child:GetAttribute("Searchable") then
								local name = child.Name:lower()
								local ftype = getFunctionType(child):lower()

								if name:find(query) or ftype:find(query) then
									createResult(page, child)
								end
							end
						end
					end
				end
			end)
		end

		local SearchBox = window.search.Frame.TextBox
		SearchBox:GetPropertyChangedSignal("Text"):Connect(function()
			searchFunctions(SearchBox.Text)
			--	window.search.Size = UDim2.new(0, 350,0, 230)
			tweenservice:Create(window.search, TweenInfo.new(0.7, Enum.EasingStyle.Quart), {Size =  UDim2.new(0, 350,0, 230)}):Play()
			tweenservice:Create(window.search.UICorner, TweenInfo.new(0.7, Enum.EasingStyle.Quart), {CornerRadius =  UDim.new(0,25)}):Play()
			if SearchBox.Text == '' then
				tweenservice:Create(window.search, TweenInfo.new(0.7, Enum.EasingStyle.Quart), {Size =  UDim2.new(0, 350,0,60)}):Play()
				tweenservice:Create(window.search.UICorner, TweenInfo.new(0.7, Enum.EasingStyle.Quart), {CornerRadius =  UDim.new(1,0)}):Play()
			end
		end)




		syde:AddConnection(syde.Comms.Event, function(p, value)
			if p == "DropShadow" then
				local imageLabel = window.shadow.ImageLabel
				local gradient = imageLabel:FindFirstChildOfClass("UIGradient")

				if not gradient then
					gradient = Instance.new("UIGradient")
					gradient.Parent = imageLabel
				end

				gradient.Color = value
			end
		end)


		-- ensure new tabs start disabled visually (Home is handled by bootstrap)
	--[[	if Data.Home.Enabled then
			ApplyTabStyle(Tab, false)
		else
			ApplyTabStyle(Tab, isFirstTab)
		end
	end]]

		local initelement = {}


		--@@Button
		function initelement:Button(Button)
			local data = {
				Title = Button.Title or "Temp Button";
				CallBack = Button.CallBack;
				Desc = Button.Description or "";
				Type = Button.Type or 'Default';
				HoldTime = Button.HoldTime or 3;
			}

			local button = pages.page.Button:Clone()
			button.Visible = true
			button.Parent = Page
			button.title.Text = data.Title
			button.Name = data.Title
			button.title.Size = UDim2.new(0, button.title.TextBounds.X + 15,0, 35)
			button:SetAttribute("Searchable", true)

			local c

			c = data.CallBack


			local fOTween = TweenInfo.new(0.7, Enum.EasingStyle.Exponential)
			local fITween = TweenInfo.new(0.7, Enum.EasingStyle.Exponential)

			if data.Type == 'Default' then
				-- UI Stroke effect on button press

				button.interact.MouseButton1Down:Connect(function()
					tweenservice:Create(button.UIStroke, fOTween, { Transparency = 1 }):Play()
					tweenservice:Create(button.ImageLabel, fOTween, { ImageTransparency = 1 }):Play()
					tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
				end)

				button.interact.MouseButton1Up:Connect(function()
					tweenservice:Create(button.UIStroke, fITween, { Transparency = 0 }):Play()
					tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 0.95 }):Play()


				end)

				button.interact.MouseButton1Click:Connect(function()
					if data.CallBack then
						local success, errorMsg = pcall(c)
						if not success then
							warn(`[ Button Error: { button.Name } ] Callback Error: { errorMsg }`)

						end
					else
						warn(`[ CallBack Missing: { button.Name } ] No Function Assigned`)
					end
				end)

				-- Extra Check 
				button.interact.MouseLeave:Connect(function()
					tweenservice:Create(button.UIStroke, fITween, { Transparency = 0 }):Play()
					tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 0.95 }):Play()
				end)
			elseif data.Type == 'Hold' then
				local HoldTime = data.HoldTime
				local Holding = false
				local TimeLeft = HoldTime
				local Complete = false

				button.ImageLabel.Image = 'rbxassetid://127075195365098'
				button.ImageLabel.Rotation = 0
				button.ImageLabel.Size = UDim2.new(0, 16,0, 16)
				button.ImageLabel.Position = UDim2.new(1, -41,0.5, 0)

				local function CancelOperation()
					Holding = false
					tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 0.95 }):Play()
					tweenservice:Create(button.title.timer, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
					if not Complete then
						tweenservice:Create(button.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 1 }):Play()
						tweenservice:Create(button.UIStroke.UIGradient, TweenInfo.new(1, Enum.EasingStyle.Linear), { Offset = Vector2.new(-1, 0) }):Play()
						tweenservice:Create(button, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { Position = UDim2.new(0 ,-15 ,0 ,button.Position.Y.Offset) }):Play()
						task.wait(0.15)
						tweenservice:Create(button, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { Position = UDim2.new(0 ,30 ,0 ,button.Position.Y.Offset) }):Play()
						task.wait(0.15)
						tweenservice:Create(button, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { Position = UDim2.new(0 ,0 ,0 ,button.Position.Y.Offset) }):Play()
						task.wait(1)
						tweenservice:Create(button.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 0 }):Play()
					end

					-- did not complete 

					--	button.UIStroke.UIGradient.Offset = Vector2.new(-1, 0)
					--	tweenservice:Create(button.UIStroke, TweenInfo.new(HoldTime, Enum.EasingStyle.Linear), { Offset = Vector2.new(-1, 0) }):Play()

					TimeLeft = HoldTime
					button.title.timer.Text = tostring(HoldTime)
					task.wait(0.1)
					Complete = false
				end

				button.interact.MouseButton1Down:Connect(function()

					Holding = true
					TimeLeft = HoldTime
					button.title.timer.Text = tostring(TimeLeft)
					tweenservice:Create(button.ImageLabel, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
					tweenservice:Create(button.title.timer, TweenInfo.new(0.8, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
					tweenservice:Create(button.UIStroke.UIGradient, TweenInfo.new(HoldTime, Enum.EasingStyle.Linear), { Offset = Vector2.new(0.7, 0) }):Play()
					tweenservice:Create(button.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 0}):Play()

					-- Countdown loop
					while Holding and TimeLeft > 0 do
						TimeLeft = math.max(0, TimeLeft - runservice.Heartbeat:Wait())
						button.title.timer.Text = string.format("%.1f", TimeLeft) 

					end

					if TimeLeft <= 0 then
						Complete = true

						if data.CallBack then
							local success, errorMsg = pcall(data.CallBack)
							if not success then
								warn("[CALLBACK ERROR]:", errorMsg)
							end
						else
							warn("[CALLBACK MISSING]: No Function Assigned To", data.Title)
						end

						tweenservice:Create(button, TweenInfo.new(0.34, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.fromRGB(24, 24, 24) }):Play()
						tweenservice:Create(button.UIStroke.UIGradient, TweenInfo.new(0.1, Enum.EasingStyle.Linear), { Offset = Vector2.new(-1, 0) }):Play()
						task.wait(0.34)
						tweenservice:Create(button, TweenInfo.new(0.34, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.fromRGB(17, 17, 17) }):Play()
					end
				end)

				button.interact.MouseButton1Up:Connect(function()
					CancelOperation()
				end)

				button.interact.MouseLeave:Connect(function()
					if Holding then
						CancelOperation()
					end
				end)
			end

			--[DESC]
			local descLabel = button:FindFirstChild("desc")

			if descLabel then
				if data.Desc and data.Desc ~= "" then
					descLabel.Text = data.Desc
					descLabel.Visible = true
					descLabel.TextWrapped = true

					local function updateSize()
						local textSize = textservice:GetTextSize(
							descLabel.Text,
							descLabel.TextSize,
							descLabel.Font,
							Vector2.new(descLabel.AbsoluteSize.X, math.huge)
						)

						local newDescSize = UDim2.new(1, -150, 0, textSize.Y)
						local newButtonSize = UDim2.new(button.Size.X.Scale, button.Size.X.Offset, 0, button.title.Size.Y.Offset + textSize.Y + 10)

						local descTween = tweenservice:Create(descLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
						descTween:Play()

						local buttonTween = tweenservice:Create(button, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
						buttonTween:Play()
					end

					updateSize()

					descLabel:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
				else
					descLabel.Visible = false
				end
			end

		end

		--@@Toggle
		function initelement:Toggle(Toggle)
			local data = {
				Title = Toggle.Title or "Temp Toggle";
				Desc = Toggle.Description or "";
				V = Toggle.Value or false;
				Config = Toggle.Config or false;
				CallBack = Toggle.CallBack;
				Flag = Toggle.Flag;
			}

			local toggle = pages.page.Toggle:Clone()
			toggle.Visible = true
			toggle.Parent = Page
			toggle.title.Text = data.Title
			toggle.Name = data.Title
			toggle:SetAttribute("Searchable", true)


			local toggleConfiguration = ui.Render.ToggleConfiguration:Clone()
			toggleConfiguration.Parent = ui.Render
			toggleConfiguration.Visible = false

			toggleConfiguration.Container.KeyBind.Bind.v.Text = 'None'
			tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { Size = UDim2.new(0, toggleConfiguration.Container.KeyBind.Bind.v.TextBounds.X + 20,0, 25) }):Play()

			toggleConfiguration.BackgroundTransparency = 1
			toggleConfiguration.Container.KeyBind.Title.TextTransparency = 1
			toggleConfiguration.Container.KeyBind.Bind.BackgroundTransparency = 1
			toggleConfiguration.Container.KeyBind.Bind.v.TextTransparency = 1
			toggleConfiguration.Container.Clear.Title.TextTransparency = 1
			toggleConfiguration.Container.Clear.clear.ImageLabel.ImageTransparency = 1
			toggleConfiguration.Size = UDim2.new(0, 75,0, 53)

			if not data.Config then
				toggle.configure:Destroy()
			end

			local toggleTween = TweenInfo.new(0.7, Enum.EasingStyle.Exponential)
			local fadeTween = TweenInfo.new(0.57, Enum.EasingStyle.Exponential, Enum.EasingDirection.Out)

			local function UpdateToggleUI(state)
				local targetColor = state and syde.theme.HitBox or Color3.fromRGB(28, 28, 28)
				local strokeTransparency = state and 1 or 0
				local checkTransparency = state and 0 or 1
				local gradientTransparency = state and 0 or 1
				local glowTransparency = state and 0.7 or 1
				local textTransparency = state and 0 or 0.5

				tweenservice:Create(toggle.tog, toggleTween, { BackgroundColor3 = targetColor }):Play()
				--	tweenservice:Create(toggle.tog.UIStroke, toggleTween, { Transparency = strokeTransparency }):Play()
				tweenservice:Create(toggle.tog.check, toggleTween, { ImageTransparency = checkTransparency }):Play()
				tweenservice:Create(toggle.tog.gradfr, fadeTween, { BackgroundTransparency = gradientTransparency }):Play()
				tweenservice:Create(toggle.tog.glow, toggleTween, { ImageTransparency = glowTransparency }):Play()
				tweenservice:Create(toggle.tog.glow, toggleTween, { ImageColor3 = targetColor }):Play()
				tweenservice:Create(toggle.title, toggleTween, { TextTransparency = textTransparency }):Play()
			end

			UpdateToggleUI(data.V)

			toggle.interact.MouseButton1Click:Connect(function()
				data.V = not data.V
				UpdateToggleUI(data.V)

				local success, errorMsg = pcall(function()
					if data.CallBack then
						data.CallBack(data.V)
					end
				end)

				if not success then
					warn("[CALLBACK ERROR][" .. toggle.Name .. "]: " .. tostring(errorMsg))
				end
				SaveConfig()
			end)

			--[DESC]
			local descLabel = toggle:FindFirstChild("desc")

			if descLabel then
				if data.Desc and data.Desc ~= "" then
					descLabel.Text = data.Desc
					descLabel.Visible = true
					descLabel.TextWrapped = true

					local function updateSize()
						local textSize = textservice:GetTextSize(
							descLabel.Text,
							descLabel.TextSize,
							descLabel.Font,
							Vector2.new(descLabel.AbsoluteSize.X, math.huge)
						)

						local newDescSize = UDim2.new(1, -150, 0, textSize.Y)
						local newButtonSize = UDim2.new(toggle.Size.X.Scale, toggle.Size.X.Offset, 0, toggle.title.Size.Y.Offset + textSize.Y + 10) -- Adding extra padding

						local descTween = tweenservice:Create(descLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
						descTween:Play()

						local ToggleTween = tweenservice:Create(toggle, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
						ToggleTween:Play()
					end

					updateSize()

					descLabel:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
				else
					descLabel.Visible = false
				end
			end


			-- [CONFIGURATIPON]
			if data.Config then

				local State = false

				local enterTween = TweenInfo.new(0.5, Enum.EasingStyle.Exponential)

				toggle.configure.MouseEnter:Connect(function()
					tweenservice:Create(toggle.configure, enterTween, { ImageColor3 = Color3.fromRGB(255, 255, 255) }):Play()
				end)

				toggle.configure.MouseLeave:Connect(function()
					tweenservice:Create(toggle.configure, enterTween, { ImageColor3 = Color3.fromRGB(104, 104, 104) }):Play()
				end)

				local function ToggleConfigOpen()
					toggleConfiguration.Visible = true
					State = true

					tweenservice:Create(toggleConfiguration, enterTween, { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Title, enterTween, { TextTransparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, enterTween, { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.UIStroke, enterTween, { Transparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, enterTween, { TextTransparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, enterTween, { ImageTransparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration.Container.Clear.Title, enterTween, { TextTransparency = 0 }):Play()
					tweenservice:Create(toggleConfiguration, TweenInfo.new(0.7, Enum.EasingStyle.Quint), { Size = UDim2.new(0, 174,0, 88) }):Play()
					--	tweenservice:Create(toggleConfiguration.shadow.ImageLabel, enterTween, { ImageTransparency = 0.57 }):Play()

				end

				local function ToggleConfigClose()
					State = false

					tweenservice:Create(toggleConfiguration, enterTween, { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Title, enterTween, { TextTransparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, enterTween, { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.UIStroke, enterTween, { Transparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, enterTween, { TextTransparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, enterTween, { ImageTransparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration.Container.Clear.Title, enterTween, { TextTransparency = 1 }):Play()
					tweenservice:Create(toggleConfiguration, TweenInfo.new(0.7, Enum.EasingStyle.Quint), { Size = UDim2.new(0, 75,0, 53) }):Play()
					--	tweenservice:Create(toggleConfiguration.shadow.ImageLabel, enterTween, { ImageTransparency = 1 }):Play()
					task.wait(0.5)

					toggleConfiguration.Visible = false

				end

				local TogService
				local heldKeys = {} 
				local debounce1 = false

				local function ToggleConfig()
					if debounce1 then return end
					debounce1 = true

					if not toggleConfiguration.Visible then
						TogService = runservice.RenderStepped:Connect(function()
							toggleConfiguration:TweenPosition(UDim2.new(0,toggle.configure.AbsolutePosition.X - 190,0,toggle.configure.AbsolutePosition.Y + toggle.configure.AbsoluteSize.Y + 65), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.1, true)
							if not toggleConfiguration.Visible then
								TogService:Disconnect()
							end
						end)
						ToggleConfigOpen()
					else
						if TogService then TogService:Disconnect() end
						ToggleConfigClose()
					end

					task.delay(0.4, function()
						debounce1 = false
					end)
				end

				toggle.configure.MouseButton1Click:Connect(function()
					ToggleConfig()
				end)

				local function ResizeBindFrame()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind, TweenInfo.new(0.5, Enum.EasingStyle.Quint), { Size = UDim2.new(0, toggleConfiguration.Container.KeyBind.Bind.v.TextBounds.X + 20,0, 25) }):Play()
				end

				local function setKeybind(key)
					if not key then
						toggleConfiguration.Container.KeyBind.Bind.v.Text = 'None'
						ResizeBindFrame()
						data.Keybind = nil
					else
						data.Keybind = key
						data.KeybindReady = false

						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
						toggleConfiguration.Container.KeyBind.Bind.v.Text = key.Name
						tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
						ResizeBindFrame()

						task.delay(0.5, function()
							data.KeybindReady = true
						end)
					end
				end

				toggleConfiguration.Container.KeyBind.Interact.MouseButton1Click:Connect(function()
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
					task.wait(0.2)
					toggleConfiguration.Container.KeyBind.Bind.v.Text = "..."
					tweenservice:Create(toggleConfiguration.Container.KeyBind.Bind.v, TweenInfo.new(0.25, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
					ResizeBindFrame()


					local connection
					connection = userinput.InputBegan:Connect(function(input, processed)
						if not processed and input.UserInputType == Enum.UserInputType.Keyboard then
							setKeybind(input.KeyCode)
							connection:Disconnect()
						end
					end)
				end)

				userinput.InputBegan:Connect(function(input, processed)
					if not processed and data.Keybind and data.KeybindReady and input.KeyCode == data.Keybind then
						data.V = not data.V
						UpdateToggleUI(data.V)

						if data.CallBack then
							local success, errorMsg = pcall(function()
								data.CallBack(data.V)
							end)
							if not success then
								warn("[CALLBACK ERROR][" .. toggle.Name .. "]: " .. tostring(errorMsg))
							end
							SaveConfig()
						end


					end
				end)

				local debounce2 = false

				toggleConfiguration.Container.Clear.Interact.MouseButton1Click:Connect(function()
					if debounce2 then return end
					debounce2 = true

					setKeybind(nil)

					local function blink()
						tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quint), { Rotation = 13 }):Play()
						task.wait(0.2)
						tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quint), { Rotation = -13 }):Play()
						task.wait(0.2)
						tweenservice:Create(toggleConfiguration.Container.Clear.clear.ImageLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quint), { Rotation = 0 }):Play()
					end

					blink()

					task.delay(2, function()
						debounce2 = false
					end)
				end)

				toggleConfiguration.Container.Clear.MouseEnter:Connect(function()
					tweenservice:Create(toggleConfiguration.Container.Clear.clear, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.9 }):Play()
				end)

				toggleConfiguration.Container.Clear.MouseLeave:Connect(function()
					tweenservice:Create(toggleConfiguration.Container.Clear.clear, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
				end)

			end

			syde:AddConnection(syde.Comms.Event, function(p, color)
				if p == 'HitBox' then
					if data.V then
						toggle.tog.BackgroundColor3 = color
						toggle.tog.glow.ImageColor3 = color
					end
				end
			end)

			function data:Set(NewValue, skipSave)

				if data.V == NewValue then return end -- prevent duplicate calls

				data.V = NewValue
				UpdateToggleUI(NewValue)

				if data.CallBack then
					local success, errorMsg = pcall(function()
						data.CallBack(data.V)
					end)
					if not success then
						warn("[CALLBACK ERROR][" .. toggle.Name .. "]: " .. tostring(errorMsg))
					end
				end

				-- ALWAYS save unless explicitly skipped (like during LoadConfig)
				if not skipSave then
					SaveConfig()
				end
			end

			-- If config already loaded before element creation
			if syde.ConfigEnabled and data.Flag and syde.Flags[data.Flag] and syde.Flags[data.Flag].V ~= nil then
				data:Set(syde.Flags[data.Flag].V, true)
			end

			if syde.ConfigEnabled then
				if data.Flag then
					syde.Flags[data.Flag] = data
				end
			end

			return data
		end


		--@@Slider
		function initelement:Slider(Slider)
			local data = {
				Title = Slider.Title;
				Desc = Slider.Description;
				Sliders = Slider.Sliders
			}

			local slider = pages.page.Slider:Clone()
			slider.Visible = true
			slider.Parent = Page
			slider.title.Text = data.Title
			slider.Name = data.Title
			slider.slideholder.slider.Visible = false
			slider:SetAttribute("Searchable", true)


			--[SLIDERS INITIALIZE]
			for _, Options in ipairs(data.Sliders) do
				local Slider = pages.page.Slider.slideholder.slider:Clone()

				Options = {
					Title = Options.Title or "Slider";
					Increment = Options.Increment or 1;
					Range = Options.Range or {0, 100};
					StarterValue = Options.StarterValue or 16;
					CallBack = Options.CallBack;
					Flag = Options.Flag;
				}

				Slider.Name = Options.Title
				Slider.Title.Text = Options.Title
				Options.Value = Options.StarterValue

				local dragging = false
				Slider.Visible = true
				Slider.Parent = slider.slideholder

				local SliderPosition
				if Options.StarterValue <= Options.Range[1] then
					SliderPosition = 0
				elseif Options.StarterValue >= Options.Range[2] then
					SliderPosition = 1
				else
					local range = Options.Range[2] - Options.Range[1]
					SliderPosition = (Options.StarterValue - Options.Range[1]) / range
				end


				Slider.slide.slideframe:TweenSize(UDim2.new(SliderPosition, 0, 1, 0), Enum.EasingDirection.Out, Enum.EasingStyle.Quint, 0.5, true)

				syde:registerLoadTween(
					Slider.slide.slideframe,
					{Size = UDim2.new(SliderPosition, 0, 1, 0)},
					{Size = UDim2.new(0, 100,1, 0)},
					TweenInfo.new(0.85, Enum.EasingStyle.Quint)
				)

				syde:replayLoadTweens(Slider.slide.slideframe)

				Slider.v.Text = string.format("<font size='14'>%d</font><font color='#434343'>/%d</font>", Options.StarterValue, Options.Range[2])

				local function BuildTicks(slide, options)
					local ticksFrame = slide:FindFirstChild("Ticks")
					if not ticksFrame then
						warn("❌ Missing Slider.slide.Ticks")
						return
					end

					local template = ticksFrame:FindFirstChild("tick")
					if not template then
						warn("❌ Missing Tick template inside Ticks")
						return
					end

					local min, max = options.Range[1], options.Range[2]
					local increment = options.Increment
					local range = max - min

					if range <= 0 or increment <= 0 then
						warn("❌ Invalid range/increment", range, increment)
						return
					end

					local tickCount = math.floor(range / increment) + 1
					if tickCount < 2 then return end

					-- wait for UI to size properly
					task.wait()

					local width = ticksFrame.AbsoluteSize.X
					local height = ticksFrame.AbsoluteSize.Y


					local spacing = width / (tickCount - 1)

					-- Reuse existing ticks instead of destroying all
					local existingTicks = {}
					for _, child in ipairs(ticksFrame:GetChildren()) do
						if child:IsA("Frame") and child ~= template then
							table.insert(existingTicks, child)
						end
					end

					-- Create new ticks if needed
					for i = 0, tickCount - 1 do
						local tick = existingTicks[i + 1] or template:Clone()
						tick.Visible = true
						tick.AnchorPoint = Vector2.new(0.5, 0.5)
						tick.BorderSizePixel = 0
						--	tick.BackgroundTransparency = 1
						tick.Parent = ticksFrame

						local finalPos = UDim2.fromOffset(i * spacing, height / 1.5)
						tweenservice:Create(
							tick,
							TweenInfo.new(0.35, Enum.EasingStyle.Quint, Enum.EasingDirection.Out),
							{
								Position = finalPos,
								BackgroundTransparency = 0.85
							}
						):Play()
					end

					-- Destroy extra ticks
					for i = tickCount + 1, #existingTicks do
						existingTicks[i]:Destroy()
					end

					--	print("✅ Created", tickCount, "ticks")
				end

				-- Connect AbsoluteSize change **only once**
				if Options.Increment > 4 then
					if not Slider.slide.Ticks:FindFirstChild("_ResizeConnection") then
						local conn = Slider.slide.Ticks:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
							BuildTicks(Slider.slide, Options)
						end)
						-- Tag the connection so we don't connect again
						local marker = Instance.new("BoolValue")
						marker.Name = "_ResizeConnection"
						marker.Parent = Slider.slide.Ticks
						marker:GetPropertyChangedSignal("Parent"):Connect(function()
							if not marker.Parent then
								conn:Disconnect()
							end
						end)
					end
				end




				local function UpdateSlider(x)
					if dragging then
						local sliderStart = Slider.slide.AbsolutePosition.X
						local sliderWidth = Slider.slide.AbsoluteSize.X
						local sliderPosition = (x - sliderStart) / sliderWidth
						sliderPosition = math.clamp(sliderPosition, 0, 1)

						local range = Options.Range[2] - Options.Range[1]
						local newValue = Options.Range[1] + sliderPosition * range
						newValue = math.floor((newValue - Options.Range[1]) / Options.Increment + 0.5) * Options.Increment + Options.Range[1]

						-- Update the slider visual position
						local snapPosition = (newValue - Options.Range[1]) / range
						Slider.slide.slideframe:TweenSize(UDim2.new(snapPosition, 0, 1, 0), Enum.EasingDirection.Out, Enum.EasingStyle.Quint, 0.55, true)

						syde:registerLoadTween(
							Slider.slide.slideframe,
							{Size = UDim2.new(snapPosition, 0, 1, 0)},
							{Size = UDim2.new(0, 100,1, 0)},
							TweenInfo.new(0.85, Enum.EasingStyle.Quint)
						)


						-- Update the displayed value
						Slider.v.Text = string.format("<font size='14'>%d</font><font color='#434343'>/%d</font>", newValue, Options.Range[2])

						tweenservice:Create(Slider.Title, TweenInfo.new(0.55, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()

						local success, errorMsg = pcall(function()
							Options.CallBack(newValue)
						end)
						if not success then
							warn("[CALLBACK ERROR][" .. Slider.Name .. "]: " .. tostring(errorMsg))
						end


						Options:Set(newValue)
						SaveConfig()

					end
				end
				UpdateSlider()

				Slider.slide.Interact.MouseButton1Down:Connect(function()
					dragging = true
				end)

				Slider.slide.Interact.MouseButton1Up:Connect(function()
					dragging = false
				end)

				syde:AddConnection(userinput.InputEnded, function(input, processed)
					if input.UserInputType == Enum.UserInputType.MouseButton1  or input.UserInputType == Enum.UserInputType.Touch then
						dragging = false
						tweenservice:Create(Slider.Title, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { TextTransparency = 0.6 }):Play()
					end
				end)

				syde:AddConnection(userinput.InputChanged, function(input)
					if dragging and input.UserInputType == Enum.UserInputType.MouseMovement  or input.UserInputType == Enum.UserInputType.Touch  then
						UpdateSlider(input.Position.X)
					end
				end)

				Slider.slide.slideframe.BackgroundColor3 = syde.theme.HitBox
				Slider.slide.slideframe.shadowHolder.ambientShadow.ImageColor3 = syde.theme.HitBox
				Slider.slide.slideframe.shadowHolder.penumbraShadow.ImageColor3 = syde.theme.HitBox
				Slider.slide.slideframe.shadowHolder.umbraShadow.ImageColor3 = syde.theme.HitBox
				slider.slideholder.Size = UDim2.new(1,-30,0,slider.slideholder.UIListLayout.AbsoluteContentSize.Y)
				local ss = slider.slideholder.UIListLayout.AbsoluteContentSize.Y
				slider.Size = UDim2.new(1,-35,0, ss  + 20)

				syde:AddConnection(syde.Comms.Event, function(p, color)
					if p == 'HitBox' then
						Slider.slide.slideframe.BackgroundColor3 = color
						Slider.slide.slideframe.shadowHolder.ambientShadow.ImageColor3 = color
						Slider.slide.slideframe.shadowHolder.penumbraShadow.ImageColor3 = color
						Slider.slide.slideframe.shadowHolder.umbraShadow.ImageColor3 = color
					end
				end)

				function Options:Set(NewVal, skipSave)
					local range = Options.Range[2] - Options.Range[1]
					local sliderPosition = (NewVal - Options.Range[1]) / range

					Slider.slide.slideframe:TweenSize(
						UDim2.new(sliderPosition, 0, 1, 0),
						Enum.EasingDirection.Out,
						Enum.EasingStyle.Quint,
						0.55,
						true
					)

					-- Register load tween
					syde:registerLoadTween(
						Slider.slide.slideframe,
						{Size = UDim2.new(sliderPosition, 0, 1, 0)},
						{Size = UDim2.new(0, 100, 1, 0)},
						TweenInfo.new(0.85, Enum.EasingStyle.Quint)
					) 

					-- Update value display
					Slider.v.Text = string.format("<font size='14'>%d</font><font color='#434343'>/%d</font>", tostring(NewVal), Options.Range[2])

					-- Tween title appearance
					tweenservice:Create(Slider.Title, TweenInfo.new(0.55, Enum.EasingStyle.Exponential), {
						TextTransparency = 0
					}):Play()

					-- Callback
					local success, result = pcall(function()
						Options.CallBack(NewVal)
					end)
					if not success then
						warn(`[ Slider Error: { slider.Name } ] Callback Error: { result }`)
					end

					Options.StarterValue = NewVal
					SaveConfig()
				end

				if syde.ConfigEnabled then
					if Options.Flag then
						syde.Flags[Options.Flag] = Options
					end
				end

			end

			--[DESC]
			local descLabel = slider.slideholder:FindFirstChild("Desc")

			if descLabel then
				if data.Desc and data.Desc ~= "" then
					descLabel.Text = data.Desc
					descLabel.Visible = true
					descLabel.TextWrapped = true

					local function updateSize()
						local textSize = textservice:GetTextSize(
							descLabel.Text,
							descLabel.TextSize,
							descLabel.Font,
							Vector2.new(descLabel.AbsoluteSize.X, math.huge)
						)

						local newDescSize = UDim2.new(1, -150, 0, textSize.Y)
						local newButtonSize = UDim2.new(slider.Size.X.Scale, slider.Size.X.Offset, 0,slider.slideholder.AbsoluteSize.Y + slider.title.Size.Y.Offset + textSize.Y + 15) -- Adding extra padding

						local descTween = tweenservice:Create(descLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
						descTween:Play()

						local ToggleTween = tweenservice:Create(slider, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
						ToggleTween:Play()
					end

					updateSize()

					descLabel:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
				else
					descLabel.Visible = false
				end
			end

		end

		--@@KeyBind
		function initelement:Keybind(Keybind)
			local data = {
				Title = Keybind.Title;
				Key = Keybind.Key;
				Desc = Keybind.Description or "";
				CallBack = Keybind.CallBack;
				WaitingForKey = false;
				Hold = false;
				Holding = false
			}

			local KeyBind = pages.page.KeyBind:Clone()
			KeyBind.Visible = true
			KeyBind.Parent = Page
			KeyBind.title.Text = data.Title
			KeyBind.Name = data.Title
			KeyBind:SetAttribute("Searchable", true)

			KeyBind.Bind.v.Text = data.Key and data.Key.Name or "NONE"
			tweenservice:Create(KeyBind.Bind, TweenInfo.new(0.55, Enum.EasingStyle.Quint ), {Size = UDim2.new(0, KeyBind.Bind.v.TextBounds.X + 30, 0, KeyBind.Bind.Size.Y.Offset)}):Play()

			KeyBind.interact.MouseButton1Click:Connect(function()
				KeyBind.Bind.v.Text = '...'
				tweenservice:Create(KeyBind.Bind.UIStroke, TweenInfo.new(0.25, Enum.EasingStyle.Quart), {Thickness = 1}):Play()
				data.WaitingForKey = true
			end)

			KeyBind.Bind.v:GetPropertyChangedSignal('TextBounds'):Connect(function()
				tweenservice:Create(KeyBind.Bind, TweenInfo.new(0.55, Enum.EasingStyle.Quint ), {Size = UDim2.new(0, KeyBind.Bind.v.TextBounds.X + 30, 0, KeyBind.Bind.Size.Y.Offset)}):Play()
			end)

			local function SetKeybind(keyCode)
				if keyCode and keyCode ~= Enum.KeyCode.Unknown then
					data.Key = keyCode
					tweenservice:Create(KeyBind.Bind.UIStroke, TweenInfo.new(0.25, Enum.EasingStyle.Quart), {Thickness = 0}):Play()
					KeyBind.Bind.v.Text = keyCode.Name
				else
					data.Key = nil
					KeyBind.Bind.v.Text = "NONE"
				end
			end

			-- Main input handler
			syde:AddConnection(userinput.InputBegan, function(input)
				if input.UserInputType ~= Enum.UserInputType.Keyboard then return end

				if data.WaitingForKey then
					data.WaitingForKey = false
					SetKeybind(input.KeyCode)
					return
				end

				if input.KeyCode == data.Key then
					data.Hold = true

					local holdConnection
					holdConnection = input.Changed:Connect(function(prop)
						if prop == "UserInputState" then
							local state = input.UserInputState
							data.Hold = (state == Enum.UserInputState.Begin)
							if state == Enum.UserInputState.End and holdConnection then
								holdConnection:Disconnect()
							end
						end
					end)

					local success, result = pcall(data.CallBack)
					if not data.Holding then
						if not success then
							warn(`[Keybind: {KeyBind.Name}] Callback Error: {result}`)
						end
					else
						if data.Hold then
							local holdLoop
							holdLoop = runservice.RenderStepped:Connect(function()
								if not data.Hold then
									data.CallBack(false)
									holdLoop:Disconnect()
								else
									data.CallBack(false)
								end
							end)
						end
					end
				end
			end)

		end

		--@@TextInput
		function initelement:TextInput(TextInput)
			local data = {
				Title = TextInput.Title or "Text Input",
				PlaceHolder = TextInput.PlaceHolder or "Enter text...",
				NumbersOnly = TextInput.NumberOnly or false,
				ClearOnLost = TextInput.ClearOnLost == nil and true or TextInput.ClearOnLost,
				--	MaxSize = TextInput.MaxSize or 100,
				CallBack = TextInput.CallBack,
			}

			local textinput = pages.page.Input:Clone()
			textinput.Visible = true
			textinput.Parent = Page
			textinput.Name = data.Title
			textinput.title.Text = data.Title
			textinput.TextFrame.TextBox.PlaceholderText = data.PlaceHolder
			textinput:SetAttribute("Searchable", true)

			local textBox = textinput.TextFrame.TextBox
			local defaultHeight = 32
			--	local maxHeight = data.MaxSize
			local ignoreNextClear = false



			textinput.TextFrame.Enter.MouseEnter:Connect(function()
				tweenservice:Create(textinput.TextFrame.Enter, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextColor3 = Color3.fromRGB(255, 255, 255)}):Play()
			end)

			textinput.TextFrame.Enter.MouseLeave:Connect(function()
				tweenservice:Create(textinput.TextFrame.Enter, TweenInfo.new(0.4, Enum.EasingStyle.Exponential), {TextColor3 = Color3.fromRGB(40, 40, 40)}):Play()
			end)

			textBox:GetPropertyChangedSignal("Text"):Connect(function()
				if data.NumbersOnly then
					textBox.Text = textBox.Text:gsub("%D", "")
				end

				textBox.Size = UDim2.new(1, -60, 0, defaultHeight + 40)

				local textSize = game:GetService("TextService"):GetTextSize(
					textBox.Text, textBox.TextSize, textBox.Font, Vector2.new(textBox.AbsoluteSize.X, math.huge)
				)

				if textBox.Text == "" then
					textBox.Size = UDim2.new(1, -60, 0, math.max(defaultHeight))
				else
					local newHeight = math.min(textSize.Y + 18, 120 + 50)
					textBox.Size = UDim2.new(1, -60, 0, newHeight)

				end

			end)

			textinput.TextFrame:GetPropertyChangedSignal("Size"):Connect(function()
				local newHeight = textinput.TextFrame.Size.Y.Offset
				local extraHeight = 32




				tweenservice:Create(
					textinput,
					TweenInfo.new(0.7, Enum.EasingStyle.Quint),
					{ Size = UDim2.new(1, -35, 0, newHeight + extraHeight + 35) }
				):Play()

				--	tweenservice:Create(textinput.ImageLabel, TweenInfo.new(0.3, Enum.EasingStyle.Quart), { Position = UDim2.new(1, -20,1, -15) }):Play()


			end)

			textBox:GetPropertyChangedSignal("Size"):Connect(function()
				local newHeight = textBox.Size.Y.Offset
				local totalHeight = math.max(newHeight, defaultHeight)

				tweenservice:Create(
					textinput.TextFrame,
					TweenInfo.new(0.7, Enum.EasingStyle.Quint),
					{ Size = UDim2.new(1, -60, 0, totalHeight + 0) }
				):Play()


			end)

			local function ProcessInput(text)
				local success, errorMsg = pcall(function()
					data.CallBack(text)
				end)
				if not success then
					warn("Error in TextInput callback [" .. textinput.Name .. "]: " .. tostring(errorMsg))
				end
			end

			textBox.FocusLost:Connect(function(enterPressed)
				if not enterPressed then return end

				local success, errorMsg = pcall(function()
					data.CallBack(textBox.Text)
				end)
				if not success then
					warn("Error in TextInput callback [" .. textinput.Name .. "]: " .. tostring(errorMsg))
				end

				if data.ClearOnLost then
					task.defer(function()
						textBox.Text = ""
						textBox.Size = UDim2.new(1, -60, 0, math.max(defaultHeight))
					end)
				else
					textBox.ClearTextOnFocus = false
				end
			end)

			textinput.TextFrame.Enter.MouseButton1Click:Connect(function()
				local success, errorMsg = pcall(function()
					data.CallBack(textBox.Text)
				end)
				if not success then
					warn("Error in TextInput callback [" .. textinput.Name .. "]: " .. tostring(errorMsg))
				end

				if data.ClearOnLost then
					task.defer(function()
						textBox.Text = ""
						textBox.Size = UDim2.new(1, -60, 0, math.max(defaultHeight))
					end)
				else
					textBox.ClearTextOnFocus = false
				end
			end)


		end

		function initelement:EnchancedView(View)
			local Viewdata = {
				Title = View.Title or "3D View",
				Object = View.Object,
				UserRotate = View.UserRotate or false,
				AutoRotate = View.AutoRotate ~= false -- default true
			}

			local EnchancedView = pages.page["3DView"]:Clone()
			EnchancedView.Visible = true
			EnchancedView.Parent = Page
			EnchancedView.Title.Text = Viewdata.Title
			EnchancedView:SetAttribute("Searchable", true)

			local Viewport = EnchancedView.ViewFrame.ViewportFrame
			local Camera = Instance.new("Camera")
			Camera.Parent = Viewport
			Viewport.CurrentCamera = Camera

			-- Clone the object
			local ObjectClone = Viewdata.Object:Clone()
			ObjectClone.Parent = Viewport

			-- Center object
			-- Center object properly so pivot is in the middle from the start
			if ObjectClone:IsA("Model") then
				ObjectClone:PivotTo(CFrame.new(0, 0, 0))
			else
				ObjectClone.CFrame = CFrame.new(0, 0, 0)
			end

			-- Anchor parts
			if ObjectClone:IsA("BasePart") then
				ObjectClone.Anchored = true
			elseif ObjectClone:IsA("Model") then
				for _, part in ipairs(ObjectClone:GetDescendants()) do
					if part:IsA("BasePart") then
						part.Anchored = true
					end
				end
			end

			if Viewdata.UserRotate == false then
				tweenservice:Create(EnchancedView.ViewFrame.ImageLabel, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {
					ImageTransparency = 1
				}):Play()
			end

			-- Determine center & size
			local primaryPart
			local size
			local center

			if ObjectClone:IsA("BasePart") then
				size = ObjectClone.Size
				ObjectClone.CFrame = CFrame.new(0, 0, 0)

			elseif ObjectClone:IsA("Model") then
				-- Get bounding box center and size
				local cf, boundsSize = ObjectClone:GetBoundingBox()
				size = boundsSize

				-- Move model so its center is at (0,0,0)
				ObjectClone:PivotTo(CFrame.new(0, 0, 0))

				-- Ensure Roblox finishes recalculating bounds after clone
				task.defer(function()
					ObjectClone:PivotTo(CFrame.new(0, 0, 0))
				end)
			end


			-- Camera distance based on size
			local maxDimension = math.max(size.X, size.Y, size.Z)
			local distance = maxDimension * 2
			Camera.CFrame = CFrame.new(Vector3.new(0, 0, distance), Vector3.new(0, 0, 0))

			-- Icon Rotation state
			local icon = EnchancedView.ViewFrame.ImageLabel


			-- Rotation state
			local targetRotationX, targetRotationY = 0, 0
			local currentRotationX, currentRotationY = 0, 0

			local dragging = false
			local dragStartPos
			local lastPos

			task.spawn(function()
				while EnchancedView.Parent do
					currentRotationX += (targetRotationX - currentRotationX) * 0.15
					currentRotationY += (targetRotationY - currentRotationY) * 0.15

					local rotationCFrame = CFrame.Angles(currentRotationX, currentRotationY, 0)
					if ObjectClone:IsA("Model") then
						ObjectClone:PivotTo(rotationCFrame)
					else
						ObjectClone.CFrame = rotationCFrame
					end
					task.wait(0.016)
				end
			end)

			-- Auto rotate (horizontal only so it looks natural)
			if Viewdata.AutoRotate then
				task.spawn(function()
					while EnchancedView.Parent do
						if not Viewdata.UserRotate or not dragging then
							targetRotationY = targetRotationY + math.rad(0.5)

						end
						task.wait(0.01)
					end
				end)
			end


			if Viewdata.UserRotate == true then
				Viewport.InputBegan:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						dragging = true
						lastPos = input.Position
						dragStartPos = input.Position -- store where drag started

						tweenservice:Create(icon, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {
							ImageColor3 = Color3.fromRGB(255, 255, 255)
						}):Play()
					end
				end)

				Viewport.InputEnded:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						dragging = false
						tweenservice:Create(icon, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {
							ImageColor3 = Color3.fromRGB(30, 30, 30)
						}):Play()
					end
				end)

				Viewport.InputChanged:Connect(function(input)
					if dragging and input.UserInputType == Enum.UserInputType.MouseMovement  then
						local delta = input.Position - lastPos

						-- Apply rotation
						targetRotationY = targetRotationY + delta.X * 0.005
						targetRotationX = math.clamp(targetRotationX - delta.Y * 0.005, -math.pi/2, math.pi/2)


						lastPos = input.Position
					end
				end)
			end


			-- === Zoom + Elastic Scroll (virtual vs visual) ===
			local ZoomFrame   = EnchancedView.ViewFrame.Zoom
			local ClipFrame   = ZoomFrame.clipframe
			local ScrollFrame = ClipFrame.scroll
			local ZoomAmountLabel = ZoomFrame.Frame.ZoomAmount -- << change to your label path

			-- Zoom range (studs)
			local minZoomDistance = maxDimension * 0.5
			local maxZoomDistance = maxDimension * 10

			-- Elastic settings
			local elasticity   = 0.4      -- visual resistance (0..1)
			local maxOverdrag  = 50       -- px visual overdrag cap
			local tweenInfo    = TweenInfo.new(0.3, Enum.EasingStyle.Back, Enum.EasingDirection.Out)

			-- Limits (top is 0, bottom is negative if scroll is taller than clip)
			local function getScrollLimits()
				local minY = 0
				local diff = ScrollFrame.AbsoluteSize.Y - ClipFrame.AbsoluteSize.Y
				local maxY = diff > 0 and -diff or 0
				return minY, maxY
			end

			-- Map Y -> zoom (defensive if no range)
			local function yToZoom(y)
				local minY, maxY = getScrollLimits()
				if minY == maxY then
					return minZoomDistance
				end
				local t = (y - minY) / (maxY - minY) -- 0..1
				return minZoomDistance + (maxZoomDistance - minZoomDistance) * t
			end

			local function updateZoom(distance)
				distance = math.clamp(distance, minZoomDistance, maxZoomDistance)
				Camera.CFrame = CFrame.new(Vector3.new(0, 0, distance), Vector3.new(0, 0, 0))
				if ZoomAmountLabel then
					tweenservice:Create(ZoomAmountLabel, TweenInfo.new(0.8, Enum.EasingStyle.Elastic), {Position = UDim2.new(1, 0,0.5, -20)}):Play()
					task.wait(0.045)
					ZoomAmountLabel.Text = 'x'..string.format("%.2f", distance)
					ZoomAmountLabel.Position = UDim2.new(1, 0,0.5, 20)
					tweenservice:Create(ZoomAmountLabel, TweenInfo.new(0.8, Enum.EasingStyle.Elastic), {Position = UDim2.new(1, 0,0.5, 0)}):Play()
				end
			end



			local function visualYFromVirtualY(vy)
				local minY, maxY = getScrollLimits()
				if vy > minY then
					local over = vy - minY
					return math.min(minY + over * elasticity, minY + maxOverdrag)
				elseif vy < maxY then
					local over = vy - maxY -- negative
					return math.max(maxY + over * elasticity, maxY - maxOverdrag)
				else
					return vy
				end
			end

			-- State
			local dragging   = false
			local lastPos
			local virtualY   = 0 

			-- Initialize virtual to current
			virtualY = ScrollFrame.Position.Y.Offset

			local initialZoom = 20
			updateZoom(initialZoom)

			-- Sync scroll position with initial zoom
			local minY, maxY = getScrollLimits()
			local t = (initialZoom - minZoomDistance) / (maxZoomDistance - minZoomDistance)
			local startY = minY + (maxY - minY) * t
			virtualY = startY
			ScrollFrame.Position = UDim2.new(ScrollFrame.Position.X.Scale, ScrollFrame.Position.X.Offset, 0, startY)

			if ZoomAmountLabel then
				ZoomAmountLabel.Text = string.format("%.2f", distance)
			end

			ZoomFrame.InputBegan:Connect(function(input)
				if input.UserInputType == Enum.UserInputType.MouseButton1 then
					dragging = true
					lastPos = input.Position
				end
			end)

			ZoomFrame.InputEnded:Connect(function(input)
				if input.UserInputType == Enum.UserInputType.MouseButton1 then
					dragging = false

					-- Clamp virtual to limits and snap visually
					local minY, maxY = getScrollLimits()
					virtualY = math.clamp(virtualY, maxY, minY)

					game:GetService("TweenService"):Create(
						ScrollFrame,
						tweenInfo,
						{ Position = UDim2.new(ScrollFrame.Position.X.Scale, ScrollFrame.Position.X.Offset, 0, virtualY) }
					):Play()

					-- Keep zoom in sync with the snapped position
					local distance = yToZoom(virtualY)
					updateZoom(distance)
				end
			end)

			ZoomFrame.InputChanged:Connect(function(input)
				if dragging and input.UserInputType == Enum.UserInputType.MouseMovement then
					local deltaY = input.Position.Y - lastPos.Y
					lastPos = input.Position

					-- 1) Update virtual Y with full delta (no elasticity here)
					virtualY = virtualY + deltaY

					-- 2) Visual Y with elasticity (so it rubber-bands)
					local visualY = visualYFromVirtualY(virtualY)
					ScrollFrame.Position = UDim2.new(ScrollFrame.Position.X.Scale, ScrollFrame.Position.X.Offset, 0, visualY)

					-- 3) Zoom uses CLAMPED virtual Y (so overdrag doesn't affect zoom)
					local minY, maxY = getScrollLimits()
					local clampedY = math.clamp(virtualY, maxY, minY)
					local distance = yToZoom(clampedY)
					updateZoom(distance)
				end
			end)

		end


		--@@Labels/Paragraph
		function initelement:Paragraph(Paragraph)
			local ParaData = {
				Title = Paragraph.Title;
				Content = Paragraph.Content;
			}

			local Para = pages.page.Paragraph:Clone()
			Para.Visible = true
			Para.Parent = Page
			Para.Frame.title.Text = ParaData.Title
			Para.Content.Text = ParaData.Content
			Para:SetAttribute("Searchable", true)

			Para.Content.Size = UDim2.new(1, -20, 0, Para.Content.TextBounds.Y)
			--	Para.Size = UDim2.new(1, -35, 0, Para.Content.Size.Y.Offset + 200)

			local function updateSize()
				local textSize = textservice:GetTextSize(
					Para.Content.Text,
					Para.Content.TextSize,
					Para.Content.Font,
					Vector2.new(Para.Content.AbsoluteSize.X, math.huge) -- Allows vertical expansion
				)

				local newDescSize = UDim2.new(1, -20, 0, textSize.Y)
				local newButtonSize = UDim2.new(Para.Size.X.Scale, Para.Size.X.Offset, 0, textSize.Y + 120) -- Adding extra padding

				local descTween = tweenservice:Create(Para.Content, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newDescSize })
				descTween:Play()

				local buttonTween = tweenservice:Create(Para, TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out), { Size = newButtonSize })
				buttonTween:Play()
			end

			updateSize()

			Para.Content:GetPropertyChangedSignal("TextBounds"):Connect(updateSize)
		end

		function initelement:Label(Text, Alignment)

			local Label = pages.page.Label:Clone()
			Label.Visible = true
			Label.Parent = Page
			Label.text.Text = Text
			Label:SetAttribute("Searchable", true)

			if Alignment == 'Center' then
				Label.text.TextXAlignment = Enum.TextXAlignment.Center
			elseif Alignment == 'Right' then
				Label.text.TextXAlignment = Enum.TextXAlignment.Right
			end


		end

		function initelement:Section(Title, Icon)
			local SectionData = {
				Title = Title
			}

			local Section =  pages.page.Section:Clone()
			Section.Visible = true
			Section.Title.Text = Title
			Section.Parent = Page
			Section.Title.Position = UDim2.new(0, 0,0, 0)

			if Icon then
				Section.icon.Image = 'rbxassetid://'..Icon
				Section.Title.Position = UDim2.new(0, 25,0, 0)
			else
				Section.icon.Visible = false
			end
		end

		--@@Dropdown
		function initelement:Dropdown(Dropdown)
			local data = {
				Title = Dropdown.Title or "Temp Dropdown";
				Options = Dropdown.Options or {};
				StarterOption = Dropdown.StarterOption;
				PlaceHolder = Dropdown.PlaceHolder or "Select Option...";
				Multi = Dropdown.Multi or false;
				CallBack = Dropdown.CallBack;
			}

			local dropdown = pages.page.Dropdown:Clone()
			dropdown.Visible = true
			dropdown.Parent = Page
			dropdown.title.Text = data.Title
			dropdown.Name = data.Title
			dropdown.dropholder.drop.Container.Option.Visible = false
			dropdown.dropholder.drop.Container.Visible = false
			tweenservice:Create(dropdown.dropholder.drop.Container, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(0.33, -20,0.576, -75) }):Play()
			dropdown.dropholder.drop.selected.Text = data.PlaceHolder 
			dropdown:SetAttribute("Searchable", true)

			local DropOpen = false
			local DeBounce = false
			local OptionButton = dropdown.dropholder.drop.Container.Option
			local SelectedOptions = {}
			local SelectedOrder = {}

			local function UpdateCustomLayout()
				local yOffset = 0
				for _, option in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
					if option:IsA("Frame") and option.Visible then
						tweenservice:Create(option, TweenInfo.new(0.5, Enum.EasingStyle.Quint), {Position = UDim2.new(0, 0, 0, yOffset)}):Play()
						yOffset = yOffset + option.Size.Y.Offset + 7
					end
				end
			end

			local function OpenDrop()
				DropOpen = true
				dropdown.dropholder.drop.Container.Visible = true
				dropdown.dropholder.drop.search.Visible = true

				tweenservice:Create(dropdown, TweenInfo.new(1.34, Enum.EasingStyle.Quint), { Size = UDim2.new(1, -35, 0, 300) }):Play()
				tweenservice:Create(dropdown.dropholder.drop.Container, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(1, -20, 1, -75) }):Play()
				tweenservice:Create(dropdown.dropholder.drop.v0, TweenInfo.new(1.34, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.down, TweenInfo.new(0.35, Enum.EasingStyle.Quint), { Rotation = 180 }):Play()

				tweenservice:Create(dropdown.dropholder.drop.search, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 0.65 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 0.4 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.TextBox, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 0 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0.9 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.icon, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 0.85 }):Play()

			end

			local function CloseDrop()
				DropOpen = false
				tweenservice:Create(dropdown, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(1, -35, 0, 95) }):Play()
				tweenservice:Create(dropdown.dropholder.drop.Container, TweenInfo.new(1, Enum.EasingStyle.Quint), { Size = UDim2.new(0.33, -20, 0.576, -75) }):Play()
				tweenservice:Create(dropdown.dropholder.drop.v0, TweenInfo.new(1.34, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.down, TweenInfo.new(0.35, Enum.EasingStyle.Quint), { Rotation = 0 }):Play()

				tweenservice:Create(dropdown.dropholder.drop.search, TweenInfo.new(1, Enum.EasingStyle.Exponential), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), { Transparency = 1 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.TextBox, TweenInfo.new(1, Enum.EasingStyle.Exponential), { TextTransparency = 1 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()
				tweenservice:Create(dropdown.dropholder.drop.search.icon, TweenInfo.new(1, Enum.EasingStyle.Exponential), { ImageTransparency = 1 }):Play()

				task.wait(0.6)
				dropdown.dropholder.drop.Container.Visible = false
				dropdown.dropholder.drop.search.Visible = false

			end

			dropdown.dropholder.drop.down.MouseButton1Click:Connect(function()
				if DeBounce then return end
				DeBounce = true

				if DropOpen then
					CloseDrop()
				else
					OpenDrop()
				end

				task.delay(1.2, function()
					DeBounce = false
				end)
			end)

			local function AddToSelected(option)
				if not SelectedOptions[option] then
					SelectedOptions[option] = true

					local originalIndex
					for i, opt in ipairs(data.Options) do
						if opt == option then
							originalIndex = i
							break
						end
					end

					local insertIndex = 1
					for i, selected in ipairs(SelectedOrder) do
						local selectedIndex = table.find(data.Options, selected)
						if selectedIndex and selectedIndex < originalIndex then
							insertIndex = i + 1
						else
							break
						end
					end
					table.insert(SelectedOrder, insertIndex, option)
				end
			end

			local function RemoveFromSelected(option)
				if SelectedOptions[option] then
					SelectedOptions[option] = nil
					for i = #SelectedOrder, 1, -1 do
						if SelectedOrder[i] == option then
							table.remove(SelectedOrder, i)
							break
						end
					end
				end

				local selectedContainer = dropdown.dropholder.drop.selectContainer.ScrollingFrame
				for _, child in ipairs(selectedContainer:GetChildren()) do
					if child:IsA("Frame") and child.Name == option then
						child:Destroy()
						break
					end
				end
			end

			local function UpdateSelectedText()
				local selectedContainer = dropdown.dropholder.drop.selectContainer.ScrollingFrame
				local placeholderText = dropdown.dropholder.drop.selected
				selectedContainer.Visible = data.Multi
				dropdown.dropholder.drop.selected.Visible = false


				if data.Multi then

					if #SelectedOrder == 0 then
						placeholderText.Visible = true
						selectedContainer.Visible = false
						return
					end


					-- Create chips for each selected option
					for _, option in ipairs(SelectedOrder) do
						-- Prevent duplicate pills
						if not selectedContainer:FindFirstChild(option) then
							local optionGroup = selectedContainer.result:Clone()
							optionGroup.Visible = true
							optionGroup.Name = option
							optionGroup.TextLabel.Text = option

							-- Set up remove button
							optionGroup.X.MouseButton1Click:Connect(function()
								RemoveFromSelected(option)
								UpdateSelectedText()

								-- Visually update the dropdown list
								for _, opt in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
									if opt:IsA("Frame") and opt.Name == option then
										tweenservice:Create(opt, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
										tweenservice:Create(opt, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
										tweenservice:Create(opt.Title, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
										tweenservice:Create(opt.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0.5}):Play()
										tweenservice:Create(opt.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {ImageTransparency = 0.9}):Play()
									end
								end

								if data.CallBack then
									data.CallBack(SelectedOrder)
								end
							end)

							optionGroup.Parent = selectedContainer

							-- Optional: auto-size width
							task.defer(function()
								local padding = 40
								local textWidth = optionGroup.TextLabel.TextBounds.X
								local totalWidth = textWidth + padding

								optionGroup.TextLabel.Size = UDim2.new(0, textWidth, 1, 0)

								tweenservice:Create(optionGroup, TweenInfo.new(0.67, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, totalWidth, 0, 20)}):Play()
							end)
						end
					end

				else
					-- Single option text fallback
					dropdown.dropholder.drop.selected.Visible = true
					if #SelectedOrder > 0 then
						dropdown.dropholder.drop.selected.Text = SelectedOrder[1]
					else
						dropdown.dropholder.drop.selected.Text = data.PlaceHolder
					end
				end
			end

			--[SEARCH]
			dropdown.dropholder.drop.search.TextBox:GetPropertyChangedSignal("Text"):Connect(function()
				local searchText = dropdown.dropholder.drop.search.TextBox.Text:lower()

				for _, option in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
					if option:IsA("Frame") and option:FindFirstChild("Title") then
						local optionText = option.Title.Text:lower()
						local isTemplate = option.Name == "Option"
						local shouldShow = not isTemplate and (searchText == "" or optionText:find(searchText, 1, true) or SelectedOptions[option.Title.Text])

						if shouldShow then
							option.Visible = true
							if SelectedOptions[option.Title.Text] then
								tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
								tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
								tweenservice:Create(option.Title, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
								tweenservice:Create(option.UIStroke, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
								tweenservice:Create(option.ImageLabel, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {ImageTransparency = 0}):Play()
							else
								tweenservice:Create(option, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundTransparency = 0}):Play()
								tweenservice:Create(option, TweenInfo.new(1, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
								tweenservice:Create(option.Title, TweenInfo.new(1, Enum.EasingStyle.Exponential), {TextTransparency = 0}):Play()
								tweenservice:Create(option.UIStroke, TweenInfo.new(1, Enum.EasingStyle.Exponential), {Transparency = 0.5}):Play()
								tweenservice:Create(option.ImageLabel, TweenInfo.new(1, Enum.EasingStyle.Exponential), {ImageTransparency = 0.9}):Play()
							end
						else
							-- Hide with animation, but wait before setting Visible = false
							tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundTransparency = 1}):Play()
							tweenservice:Create(option, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
							tweenservice:Create(option.Title, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {TextTransparency = 1}):Play()
							tweenservice:Create(option.UIStroke, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
							tweenservice:Create(option.ImageLabel, TweenInfo.new(0.7, Enum.EasingStyle.Exponential), {ImageTransparency = 1}):Play()
							option.Visible = false
						end
					end
				end

				UpdateCustomLayout()
			end)



			local function SetDropdownOptions()
				local starterSet = false
				for _, OptionText in ipairs(data.Options) do
					local option = OptionButton:Clone()
					option.Title.Text = OptionText
					option.Parent = dropdown.dropholder.drop.Container
					option.Visible = true
					option.Name = OptionText

					if OptionText == data.StarterOption and not starterSet then
						starterSet = true
						dropdown.dropholder.drop.Selected.Text = OptionText
						SelectedOptions = {[OptionText] = true}
						SelectedOrder = {OptionText}

						tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
						tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0}):Play()
					end

					option.Interact.MouseButton1Click:Connect(function()
						if data.Multi then
							if SelectedOptions[OptionText] then
								RemoveFromSelected(OptionText)
								tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
								tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0.9}):Play()
							else
								AddToSelected(OptionText)
								tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
								tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0}):Play()
							end

							if data.CallBack then
								data.CallBack(SelectedOrder)
							end
						else
							dropdown.dropholder.drop.selected.Text = OptionText

							SelectedOptions = {[OptionText] = true}
							SelectedOrder = {OptionText}

							for _, opt in ipairs(dropdown.dropholder.drop.Container:GetChildren()) do
								if opt:IsA("Frame") then
									tweenservice:Create(opt, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(33, 33, 33)}):Play()
									tweenservice:Create(opt.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0.9}):Play()
								end
							end

							tweenservice:Create(option, TweenInfo.new(0.3), {BackgroundColor3 = Color3.fromRGB(39, 39, 39)}):Play()
							tweenservice:Create(option.ImageLabel, TweenInfo.new(0.3), {ImageTransparency = 0}):Play()


							if data.CallBack then
								data.CallBack(OptionText)
							end


							CloseDrop()
						end

						UpdateSelectedText()

					end)
				end

				if not starterSet then
					dropdown.dropholder.drop.selected.Text = data.PlaceHolder
				end

				UpdateCustomLayout()
			end

			SetDropdownOptions()
		end

		--@@Colorpicker
		function initelement:ColorPicker(ColorPicker)
			local data = {
				Title = ColorPicker.Title;
				Color = ColorPicker.Color;
				Color2 = ColorPicker.Color2;
				Linkable = ColorPicker.Linkable;
				Type = ColorPicker.Type or 'ColorPicker';
				GradientPath = ColorPicker.GradientPath;
				CallBack = ColorPicker.CallBack;
				Flag = ColorPicker.Flag;
			}

			ColorPicker.Linkable = ColorPicker.Linkable or true


			local colorpicker = pages.page.ColorPicker:Clone()
			colorpicker.Visible = true
			colorpicker.Parent = Page
			colorpicker.title.Text = data.Title
			colorpicker.Name = data.Title
			colorpicker:SetAttribute("Searchable", true)



			local isLinkable = Instance.new("BoolValue")
			isLinkable.Name = 'isLinkable'
			isLinkable.Value = data.Linkable
			isLinkable.Parent = colorpicker

			local HueSat = Instance.new("Color3Value")
			HueSat.Name = 'HueSat'
			HueSat.Value = data.Color
			HueSat.Parent = colorpicker


			local Open = false
			local DeBounce = false
			local State = false

			do
				local HueValues = colorpicker.HueValues

				-- kill UIListLayout if it exists
				local list = HueValues:FindFirstChildOfClass("UIListLayout")
				if list then list:Destroy() end

				local ITEMS = {
					HueValues.HEX,
					HueValues.RGB,
					HueValues.Link
				}

				local GAP = 8
				local ITEM_HEIGHT = 30
				local ITEM_WIDTH = 120
				local HORIZONTAL_THRESHOLD = 260

				local function updateHueValuesLayout()
					if not HueValues.Visible then return end

					local width = HueValues.AbsoluteSize.X
					local horizontal = width >= HORIZONTAL_THRESHOLD

					local x, y = 0, 0
					local totalHeight = 0

					for _, item in ipairs(ITEMS) do
						item.AnchorPoint = Vector2.new(1, 0)

						if horizontal then
							item.Size = UDim2.new(0, ITEM_WIDTH, 0, ITEM_HEIGHT)
							item.Position = UDim2.new(1, -x, 0, 0)
							x += ITEM_WIDTH + GAP
							totalHeight = ITEM_HEIGHT
						else
							item.Size = UDim2.new(1, -4, 0, ITEM_HEIGHT)
							item.Position = UDim2.new(1, 0, 0, -y)
							y += ITEM_HEIGHT + GAP
							totalHeight = y
						end
					end

					HueValues.Size = UDim2.new(1, -40, 0, totalHeight)
					HueValues.Position = UDim2.new(0.5, 0,1, -50)

					if Open then
						if data.Type == "Gradient" then
							tweenservice:Create(
								colorpicker,
								TweenInfo.new(0.35, Enum.EasingStyle.Quart),
								{ Size = UDim2.new(1, -35, 0, 305 + totalHeight) }
							):Play()
						else
							tweenservice:Create(
								colorpicker,
								TweenInfo.new(0.35, Enum.EasingStyle.Quart),
								{ Size = UDim2.new(1, -35, 0, 290 + totalHeight) }
							):Play()
						end

					end
				end

				HueValues:GetPropertyChangedSignal("AbsoluteSize"):Connect(updateHueValuesLayout)
				colorpicker:GetPropertyChangedSignal("AbsoluteSize"):Connect(updateHueValuesLayout)

				colorpicker:SetAttribute("UpdateHueLayout", true)
				colorpicker:GetAttributeChangedSignal("UpdateHueLayout"):Connect(updateHueValuesLayout)

				task.defer(updateHueValuesLayout)
			end


			colorpicker.color.Values.Hue.BackgroundTransparency = 1
			colorpicker.color.Values.Hue.Pin.BackgroundTransparency = 1
			colorpicker.color.Values.Hue.Pin.UIStroke.Transparency = 1
			colorpicker.color.Values.Rainbow.ImageTransparency = 1

			if data.Type == "Gradient" then
				colorpicker.color.Values.Grad.BackgroundTransparency = 1
				colorpicker.color.Values.Grad.Pin1.BackgroundTransparency = 1
				colorpicker.color.Values.Grad.Pin1.UIStroke.Transparency = 1
				colorpicker.color.Values.Grad.Pin2.BackgroundTransparency = 1
				colorpicker.color.Values.Grad.Pin2.UIStroke.Transparency = 1
			end

			colorpicker.color.SVPicker.Pin.BackgroundTransparency = 1
			colorpicker.color.SVPicker.Pin.UIStroke.Transparency = 1
			colorpicker.color.SVPicker.Brightness.BackgroundTransparency = 1
			colorpicker.color.SVPicker.Saturation.BackgroundTransparency = 1

			colorpicker.HueValues.HEX.BackgroundTransparency = 1
			colorpicker.HueValues.HEX.UIStroke.Transparency = 1
			colorpicker.HueValues.HEX.V.HEXBox.TextTransparency = 1
			colorpicker.HueValues.HEX.Copy.ImageTransparency = 1

			colorpicker.HueValues.RGB.BackgroundTransparency = 1
			colorpicker.HueValues.RGB.UIStroke.Transparency = 1
			colorpicker.HueValues.RGB.V.RGBBox.TextTransparency = 1
			colorpicker.HueValues.RGB.Copy.ImageTransparency = 1

			colorpicker.HueValues.Link.BackgroundTransparency = 1
			colorpicker.HueValues.Link.UIStroke.Transparency = 1
			colorpicker.HueValues.Link.Frame.BackgroundTransparency = 1
			colorpicker.HueValues.Link.Frame.ImageLabel.ImageTransparency = 1

			colorpicker.QuickClose.Interactable = false

			local recentContainer = colorpicker.color.Values.Recent
			local spacing = 5
			local frameSize = 12 

			local function updateRecentLayout()
				local children = {} 
				for _, child in pairs(recentContainer:GetChildren()) do
					if child:IsA("Frame") then
						table.insert(children, child)
					end
				end

				table.sort(children, function(a, b)
					return a.LayoutOrder > b.LayoutOrder 
				end)

				local totalWidth = #children * frameSize + math.max(#children - 1, 0) * spacing
				local startX = recentContainer.AbsoluteSize.X - totalWidth 

				for _, frame in ipairs(children) do
					--	frame.Position = UDim2.new(0, startX, 0.5, -frame.Size.Y.Offset / 2)
					tweenservice:Create(frame, TweenInfo.new(0.5, Enum.EasingStyle.Quart), {Position = UDim2.new(0, startX , 0.8, -frame.Size.Y.Offset / 2) }):Play()
					startX += frameSize + spacing
				end
			end

			recentContainer.ChildAdded:Connect(function(child)
				if child:IsA("Frame") then
					child.LayoutOrder = os.time() 
					updateRecentLayout()
				end
			end)
			recentContainer.ChildRemoved:Connect(updateRecentLayout)
			updateRecentLayout()

			local HSV

			if data.Color then
				HSV = { data.Color:ToHSV() }
			else

				HSV = { 0, 0, 0 }
			end
			local Selected = data.Color
			local HueValue = HSV[1]

			local function TableToColor(Table)
				if type(Table) ~= "table" then return Table end
				return Color3.fromHSV(Table[1],Table[2],Table[3])
			end

			local function FormatColor(Color, format, precision)

				format = format or "RGB"
				precision = precision or 2

				local formattedColor = ""

				if format == "RGB" then
					return	math.round(Color.R * 255) .. "," .. math.round(Color.G * 255) .. "," .. math.round(Color.B * 255)
				elseif format == "Hex" then
					formattedColor = string.format("#%02X%02X%02X",
						math.round(Color.R * 255),
						math.round(Color.G * 255),
						math.round(Color.B * 255)
					)

					return formattedColor
				end
			end

			local SVPicker = colorpicker.color.SVPicker
			local HUESlider = colorpicker.color.Values.Hue

			SVPicker.Pin.BackgroundColor3 = data.Color
			HUESlider.Pin.BackgroundColor3 = data.Color

			local Keys
			local ExternalGradient
			local ActivePin = 1
			local GradientFrame = colorpicker.color.Values:FindFirstChild("Grad")
			local HueFrame = colorpicker.color.Values.Hue
			local DraggingPin = nil

			local function updatestuff()
				data.Color = TableToColor(HSV)
				colorpicker.color.glow.ImageColor3 = data.Color
				colorpicker.color.BackgroundColor3 = data.Color

				--	colorpicker.color.BackgroundColor3 = Color3.fromHSV(HSV[1], 1, 1)
				local newColor = Color3.fromHSV(HSV[1], HSV[2], HSV[3])
				local newColor2 = Color3.fromHSV(HSV[1], 1, 1)

				if data.Type == "Gradient" and Keys and Keys[ActivePin] then
					Keys[ActivePin] = ColorSequenceKeypoint.new(Keys[ActivePin].Time, newColor)

					Keys[1] = ColorSequenceKeypoint.new(0, Keys[2].Value)
					Keys[4] = ColorSequenceKeypoint.new(1, Keys[3].Value)

					data.Color  = Keys[2].Value
					data.Color2 = Keys[3].Value

					local seq = ColorSequence.new(Keys)
					if ExternalGradient then
						ExternalGradient.Color = seq
					end
					GradientFrame.Gradient.Color = seq

					GradientFrame.Pin1.BackgroundColor3 = data.Color
					GradientFrame.Pin2.BackgroundColor3 = data.Color2
				end


				HueSat.Value = data.Color


				tweenservice:Create(HUESlider.Pin, TweenInfo.new(0.1, Enum.EasingStyle.Exponential), {BackgroundColor3 = newColor2}):Play()
				tweenservice:Create(SVPicker.Pin, TweenInfo.new(0.1, Enum.EasingStyle.Exponential), {BackgroundColor3 = newColor}):Play()


				tweenservice:Create(SVPicker.Pin, TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
					Position = UDim2.new(HSV[2], 0, 1 - HSV[3], 0)
				}):Play()

				tweenservice:Create(HUESlider.Pin, TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
					Position = UDim2.new(1 - HSV[1], 0, 0.5, 0)
				}):Play()

				local formattedHex = FormatColor(data.Color, 'Hex')
				colorpicker.HueValues.HEX.V.HEXBox.PlaceholderText = formattedHex

				local formattedRGB = FormatColor(data.Color,'RGB', 2)
				colorpicker.HueValues.RGB.V.RGBBox.PlaceholderText = formattedRGB

				if data.CallBack then
					data.CallBack(data.Color)
				end

				data.Color = data.Color
			end
			updatestuff()

			local newColor = Color3.fromHSV(HSV[1], HSV[2], HSV[3])

			local oldCallback = data.CallBack
			data.CallBack = function(col)
				if data.Type ~= "Gradient" then
					if oldCallback then oldCallback(col) end
					return
				end

				table.sort(Keys, function(a,b) return a.Time < b.Time end)

				Keys[1] = ColorSequenceKeypoint.new(0, Keys[2].Value)
				Keys[4] = ColorSequenceKeypoint.new(1, Keys[3].Value)

				data.Color  = Keys[2].Value
				data.Color2 = Keys[3].Value

				local seq = ColorSequence.new(Keys)
				ExternalGradient.Color = seq
				GradientFrame.Gradient.Color = seq

				if oldCallback then
					oldCallback(seq, data.Color, data.Color2)
				end
			end


			if data.Type == "Gradient" then
				HueFrame.Visible = true
				GradientFrame.Visible = true

				ExternalGradient = data.GradientPath

				local startCol = data.Color or ExternalGradient.Color.Keypoints[1].Value
				local endCol = data.Color2 or ExternalGradient.Color.Keypoints[#ExternalGradient.Color.Keypoints].Value

				Keys = {
					ColorSequenceKeypoint.new(0, startCol),      
					ColorSequenceKeypoint.new(0.2, startCol),  
					ColorSequenceKeypoint.new(0.8, endCol),     
					ColorSequenceKeypoint.new(1, endCol)         
				}

				ActivePin = 2 

				GradientFrame.Pin1.BackgroundColor3 = startCol
				GradientFrame.Pin2.BackgroundColor3 = endCol
			end

			local oldCallback = data.CallBack
			data.CallBack = function(col)
				if data.Type ~= "Gradient" then
					if oldCallback then oldCallback(col) end
					return
				end

				table.sort(Keys, function(a,b) return a.Time < b.Time end)
				Keys[1] = ColorSequenceKeypoint.new(0, Keys[1].Value)
				Keys[#Keys] = ColorSequenceKeypoint.new(1, Keys[#Keys].Value)

				local seq = ColorSequence.new(Keys)
				ExternalGradient.Color = seq
				GradientFrame.Gradient.Color = seq

				if oldCallback then oldCallback(seq) end
			end

			if data.Type == "Gradient" then
				local g = GradientFrame
				local UIS = game:GetService("UserInputService")
				local RS = game:GetService("RunService")
				local mouse = game.Players.LocalPlayer:GetMouse()

				local function updateUI()
					g.Pin1.Position = UDim2.new(Keys[2].Time, 0, 0.5, 0)
					g.Pin1.BackgroundColor3 = Keys[2].Value

					g.Pin2.Position = UDim2.new(Keys[3].Time, 0, 0.5, 0)
					g.Pin2.BackgroundColor3 = Keys[3].Value

					local seq = ColorSequence.new(Keys)
					ExternalGradient.Color = seq
					g.Gradient.Color = seq
				end

				g.Pin1.InputBegan:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						DraggingPin = 2
						ActivePin = 2
						local h, s, v = Keys[2].Value:ToHSV()
						HSV[1], HSV[2], HSV[3] = h, s, v
						updatestuff()
					end
				end)

				g.Pin2.InputBegan:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						DraggingPin = 3
						ActivePin = 3
						local h, s, v = Keys[3].Value:ToHSV()
						HSV[1], HSV[2], HSV[3] = h, s, v
						updatestuff()
					end
				end)

				UIS.InputEnded:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 then
						DraggingPin = nil
					end
				end)

				RS.Heartbeat:Connect(function()
					if not DraggingPin then return end

					local relX = (mouse.X - g.AbsolutePosition.X) / g.AbsoluteSize.X
					relX = math.clamp(relX, 0, 1)

					if DraggingPin == 2 then
						relX = math.clamp(relX, 0, Keys[3].Time - 0.01) 
					elseif DraggingPin == 3 then
						relX = math.clamp(relX, Keys[2].Time + 0.01, 1) 
					end

					Keys[DraggingPin] = ColorSequenceKeypoint.new(relX, Keys[DraggingPin].Value)

					updateUI()
				end)

				updateUI()
			end

			local function OpenPicker()
				Open = true
				DeBounce = true
				colorpicker.color.Values.Visible = true
				colorpicker.color.SVPicker.Visible = true

				colorpicker.HueValues.Visible = true
				colorpicker.color.Values.Recent.Visible = true

				colorpicker.interact.Interactable = false
				colorpicker.QuickClose.Interactable = true

				colorpicker.HueValues.Visible = true

				local displayGrad = colorpicker.color:FindFirstChildOfClass("UIGradient")
				if displayGrad then
					displayGrad.Enabled = false
				end

				colorpicker:SetAttribute("UpdateHueLayout", not colorpicker:GetAttribute("UpdateHueLayout"))


				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.95, Enum.EasingStyle.Quart ), { Size = UDim2.new(0, 1,0, 1) }):Play()
				tweenservice:Create(colorpicker, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(35, 35, 35) }):Play()
				tweenservice:Create(colorpicker.color, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { BackgroundColor3 = data.Color }):Play()
				tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.color.glow, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 1}):Play()
				task.wait(0.12)
				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.9, Enum.EasingStyle.Quart ), { Size = UDim2.new(1, -40,0, 160) }):Play()
				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.9, Enum.EasingStyle.Quart ), { Position = UDim2.new(0.5, 0,0, 40) }):Play()

				tweenservice:Create(colorpicker, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(17, 17, 17) }):Play()
				--	tweenservice:Create(colorpicker, TweenInfo.new( 0.8, Enum.EasingStyle.Quart ), { Size = UDim2.new(1, -35,0, 350) }):Play()
				tweenservice:Create(colorpicker.color.UICorner, TweenInfo.new( 0.8, Enum.EasingStyle.Quart ), { CornerRadius = UDim.new(0, 10) }):Play()

				tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()


				task.wait(0.6)

				tweenservice:Create(colorpicker.color.SVPicker.Brightness, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.color.SVPicker.Saturation, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.color.SVPicker.Pin, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.color.SVPicker.Pin.UIStroke, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()

				task.wait(0.5)
				tweenservice:Create(colorpicker.color.Values.Hue, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.color.Values.Hue.Pin, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.color.Values.Hue.Pin.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()

				if data.Type == "Gradient" then
					tweenservice:Create(colorpicker.color.Values.Grad, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin1, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin1.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin2, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin2.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0 }):Play()
				end


				tweenservice:Create(colorpicker.HueValues.HEX, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0.9 }):Play()
				tweenservice:Create(colorpicker.HueValues.HEX.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0.4 }):Play()
				tweenservice:Create(colorpicker.HueValues.HEX.V.HEXBox, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { TextTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.HueValues.HEX.Copy, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()

				task.wait(0.09)
				tweenservice:Create(colorpicker.HueValues.RGB, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0.9 }):Play()
				tweenservice:Create(colorpicker.HueValues.RGB.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0.4 }):Play()
				tweenservice:Create(colorpicker.HueValues.RGB.V.RGBBox, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { TextTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.HueValues.RGB.Copy, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()
				task.wait(0.09)
				tweenservice:Create(colorpicker.HueValues.Link, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0.9 }):Play()
				tweenservice:Create(colorpicker.HueValues.Link.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 0.4 }):Play()
				tweenservice:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
				tweenservice:Create(colorpicker.HueValues.Link.Frame.ImageLabel, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { ImageTransparency = 0 }):Play()

				for _,v in ipairs(colorpicker.color.Values.Recent:GetChildren()) do
					if v:IsA('Frame') then
						task.wait(0.1)
						tweenservice:Create(v, TweenInfo.new( 0.3, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 0 }):Play()
					end
				end

				task.wait(0.7)
				DeBounce = false
			end


			colorpicker.interact.MouseButton1Click:Connect(function()
				if DeBounce then return end
				if not Open then
					Open = true
					OpenPicker()
				end
			end)

			colorpicker.QuickClose.hitbox.MouseEnter:Connect(function()
				tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Quint ), { Size = UDim2.new(0, 70,0, 3) }):Play()
				tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(255, 255, 255) }):Play()
			end)

			colorpicker.QuickClose.hitbox.MouseLeave:Connect(function()
				tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Quint ), { Size = UDim2.new(0, 60,0, 3) }):Play()
				tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundColor3 = Color3.fromRGB(33, 33, 33) }):Play()
			end)

			local displayGrad = colorpicker.color:FindFirstChildOfClass("UIGradient")

			if data.Type == "Gradient" and displayGrad then
				displayGrad.Enabled = true
				displayGrad.Color = ColorSequence.new(Keys)
				-- Set to White so the gradient isn't "multiplied" or tinted by a background color
				tweenservice:Create(colorpicker.color, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.new(1, 1, 1) }):Play()
			else
				if displayGrad then displayGrad.Enabled = false end
				tweenservice:Create(colorpicker.color, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundColor3 = data.Color }):Play()
			end

			local function ClosePicker()
				Open = false
				DeBounce = true
				tweenservice:Create(colorpicker, TweenInfo.new( 0.55, Enum.EasingStyle.Quint ), { Size = UDim2.new(1, -35,0, 40) }):Play()
				--	tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.7, Enum.EasingStyle.Quart ), { Position = UDim2.new(1, -30,0, 10)}):Play()
				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.55, Enum.EasingStyle.Quint ), { Size = UDim2.new(0, 20,0, 20) }):Play()
				tweenservice:Create(colorpicker.color, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundColor3 = data.Color }):Play()
				tweenservice:Create(colorpicker.QuickClose, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color.glow, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 0.7}):Play()
				colorpicker.interact.Interactable = true
				colorpicker.QuickClose.Interactable = false

				--	task.wait(0.6)

				tweenservice:Create(colorpicker.color.SVPicker.Brightness, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color.SVPicker.Saturation, TweenInfo.new( 2, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color.SVPicker.Pin, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color.SVPicker.Pin.UIStroke, TweenInfo.new( 0.4, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()

				tweenservice:Create(colorpicker.color.Values.Hue, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color.Values.Hue.Pin, TweenInfo.new( 1, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.color.Values.Hue.Pin.UIStroke, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()

				tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new( 0.5, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()

				local displayGrad = colorpicker.color:FindFirstChildOfClass("UIGradient")

				if data.Type == "Gradient" and displayGrad then
					displayGrad.Enabled = true
					displayGrad.Color = ColorSequence.new(Keys)
					-- Set to White so the gradient isn't "multiplied" or tinted by a background color
					tweenservice:Create(colorpicker.color, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundColor3 = Color3.new(1, 1, 1) }):Play()
				else
					if displayGrad then displayGrad.Enabled = false end
					tweenservice:Create(colorpicker.color, TweenInfo.new(0.5, Enum.EasingStyle.Exponential), { BackgroundColor3 = data.Color }):Play()
				end

				if data.Type == "Gradient" then
					tweenservice:Create(colorpicker.color.Values.Grad, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin1, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin1.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin2, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					tweenservice:Create(colorpicker.color.Values.Grad.Pin2.UIStroke, TweenInfo.new( 0.8, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
				end

				tweenservice:Create(colorpicker.HueValues.RGB, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.RGB.UIStroke, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.RGB.V.RGBBox, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { TextTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.RGB.Copy, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()

				tweenservice:Create(colorpicker.HueValues.HEX, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.HEX.UIStroke, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.HEX.V.HEXBox, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { TextTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.HEX.Copy, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()

				tweenservice:Create(colorpicker.HueValues.Link, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.Link.UIStroke, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { Transparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
				tweenservice:Create(colorpicker.HueValues.Link.Frame.ImageLabel, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { ImageTransparency = 1 }):Play()
				colorpicker.HueValues.Visible = false
				for _,v in ipairs(colorpicker.color.Values.Recent:GetChildren()) do
					if v:IsA('Frame') then
						tweenservice:Create(v, TweenInfo.new( 0.6, Enum.EasingStyle.Exponential ), { BackgroundTransparency = 1 }):Play()
					end
				end
				task.wait(1)
				colorpicker.color.SVPicker.Visible = false
				colorpicker.color.Values.Recent.Visible = false
				task.wait(0.7)
				DeBounce = false
			end

			colorpicker.QuickClose.hitbox.MouseButton1Click:Connect(function()
				if DeBounce then return end
				if Open then
					Open = false
					ClosePicker()
				end
			end)


			for _,v in ipairs(colorpicker.HueValues:GetChildren()) do
				if v:IsA("Frame") then
					for _,v2 in ipairs(v:GetChildren()) do
						if v2:IsA("ImageLabel") then
							v2.MouseEnter:Connect(function()
								tweenservice:Create(v2, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {ImageColor3 = Color3.fromRGB(255, 255, 255) }):Play()
							end)
							v2.MouseLeave:Connect(function()
								tweenservice:Create(v2, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {ImageColor3 = Color3.fromRGB(66, 66, 66) }):Play()
							end)
						end
					end
				end
			end

			local function AddRecentColor(newColor)
				local recentFrame = colorpicker.colorPlaceHolder:Clone()
				recentFrame.Visible = true
				recentFrame.Parent = colorpicker.color.Values.Recent
				recentFrame.BackgroundColor3 = newColor

				recentFrame.interact.MouseButton1Click:Connect(function()
				--[[	tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 5,0, 5) }):Play()
					task.wait(0.09)
					tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Exponential), {Size = UDim2.new(0, 12,0, 12) }):Play() ]]

					local h, s, v = newColor:ToHSV()
					if s > 0.02 then
						HSV[1] = h
					end
					HSV[2] = s
					HSV[3] = v
					updatestuff()

				end)

				recentFrame.interact.MouseEnter:Connect(function()
					tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 20,0, 20) }):Play()
				end)

				recentFrame.interact.MouseLeave:Connect(function()
					tweenservice:Create(recentFrame, TweenInfo.new(0.3, Enum.EasingStyle.Quint), {Size = UDim2.new(0, 12,0, 12) }):Play()
				end)

				local maxRecentColors = 10
				local recentContainer = colorpicker.color.Values.Recent

				local children = recentContainer:GetChildren()
				if #children > maxRecentColors then
					for _, child in ipairs(children) do
						if child:IsA("Frame") then
							child:Destroy()
							break
						end
					end
				end
			end

			local SV, HUE = nil, nil

			syde:AddConnection(SVPicker.InputBegan, function(input)
				if input.UserInputType == Enum.UserInputType.MouseButton1 then
					SV = runservice.RenderStepped:Connect(function()
						local mouse = game.Players.LocalPlayer:GetMouse()
						local ColorX = math.clamp(mouse.X - SVPicker.AbsolutePosition.X, 0, SVPicker.AbsoluteSize.X) / SVPicker.AbsoluteSize.X
						local ColorY = math.clamp(mouse.Y - SVPicker.AbsolutePosition.Y, 0, SVPicker.AbsoluteSize.Y) / SVPicker.AbsoluteSize.Y

						HSV[2] = ColorX
						HSV[3] = 1 - ColorY

						updatestuff()
					end)
				end
			end)

			syde:AddConnection(SVPicker.InputEnded, function(i)
				if i.UserInputType == Enum.UserInputType.MouseButton1 and SV then
					SV:Disconnect()
					SV = nil
					AddRecentColor(data.Color)
					SaveConfig()
				end
			end)

			syde:AddConnection(HUESlider.InputBegan, function(input)
				if input.UserInputType == Enum.UserInputType.MouseButton1 then
					HUE = runservice.RenderStepped:Connect(function()
						local mouse = game.Players.LocalPlayer:GetMouse()
						local ColorX = math.clamp(mouse.X - HUESlider.AbsolutePosition.X, 0, HUESlider.AbsoluteSize.X) / HUESlider.AbsoluteSize.X

						HSV[1] = 1 - ColorX

						updatestuff()
					end)
				end
			end)

			syde:AddConnection(HUESlider.InputEnded, function(i)
				if i.UserInputType == Enum.UserInputType.MouseButton1 and HUE then
					HUE:Disconnect()
					HUE = nil
					AddRecentColor(data.Color)
					SaveConfig()
				end
			end)

			colorpicker.HueValues.HEX.V.HEXBox.FocusLost:Connect(function(Enter)
				if not Enter then return end

				local hexInput = colorpicker.HueValues.HEX.V.HEXBox.Text

				local success, result = pcall(function()
					return Color3.fromHex(hexInput)
				end)

				if success then
					local Hue, Saturation, Value = result:ToHSV()
					colorpicker.HueValues.HEX.V.HEXBox.Text = ''
					if Saturation > 0.02 then
						HSV[1] = Hue
					end
					HSV[2] = Saturation
					HSV[3] = Value
					updatestuff()
				else
					warn("Failed to convert hex to color:", result)
				end
			end)


			colorpicker.HueValues.RGB.V.RGBBox.FocusLost:Connect(function(Enter)
				if not Enter then return end

				local rgbInput = colorpicker.HueValues.RGB.V.RGBBox.Text

				local r, g, b = rgbInput:match("^(%d+),%s*(%d+),%s*(%d+)$")

				if r and g and b then

					r, g, b = tonumber(r), tonumber(g), tonumber(b)

					if r >= 0 and r <= 255 and g >= 0 and g <= 255 and b >= 0 and b <= 255 then
						local color = Color3.fromRGB(r, g, b)

						local Hue, Saturation, Value = color:ToHSV()
						if Saturation > 0.02 then
							HSV[1] = Hue
						end
						HSV[2] = Saturation
						HSV[3] = Value

						colorpicker.HueValues.RGB.V.RGBBox.Text = ''
						updatestuff()
					else
						warn("RGB values must be between 0 and 255.")
					end
				else
					warn("Invalid RGB format. Please use the format 'R,G,B' (e.g., 16,16,16).")
				end
			end)

			local UserInputService = game:GetService("UserInputService")
			local TweenService = game:GetService("TweenService")
			local RunService = game:GetService("RunService")

			local linkDragging = false
			local originalPosition = UDim2.new(0.5, 0,0, 0)
			local draggedColorPicker = nil

			local function isMouseOver(guiObject)
				local mouse = game.Players.LocalPlayer:GetMouse()
				local pos = guiObject.AbsolutePosition
				local size = guiObject.AbsoluteSize
				return mouse.X >= pos.X and mouse.X <= pos.X + size.X and mouse.Y >= pos.Y and mouse.Y <= pos.Y + size.Y
			end

			colorpicker.HueValues.Link.Frame.interact.MouseButton1Down:Connect(function()
				linkDragging = true
				draggedColorPicker = colorpicker

				TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {Size = UDim2.new(0, 40,1, 0)}):Play()

				local followMouse
				followMouse = RunService.RenderStepped:Connect(function()
					if not linkDragging then
						followMouse:Disconnect()
						return
					end
					local mouse = game.Players.LocalPlayer:GetMouse()
					-- colorpicker.HueValues.Link.Frame.Position = UDim2.new(0, mouse.X - colorpicker.AbsolutePosition.X - 50, 0, mouse.Y - colorpicker.AbsolutePosition.Y - 260)
					TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.3, Enum.EasingStyle.Quart), {Position = UDim2.new(0, mouse.X - colorpicker.AbsolutePosition.X - 50, 0, mouse.Y - colorpicker.AbsolutePosition.Y - 260) }):Play()

					for _, otherPicker in pairs(Page:GetChildren()) do
						if otherPicker:IsA("Frame") and otherPicker:FindFirstChild("isLinkable") and otherPicker.isLinkable.Value then
							if isMouseOver(otherPicker) and otherPicker ~= draggedColorPicker then
								TweenService:Create(otherPicker.UIStroke, TweenInfo.new(0.6, Enum.EasingStyle.Exponential), {Transparency = 0}):Play()
							else
								TweenService:Create(otherPicker.UIStroke, TweenInfo.new(0.6, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
							end
						end
					end
				end)
			end)

			UserInputService.InputEnded:Connect(function(input)
				if input.UserInputType == Enum.UserInputType.MouseButton1 and linkDragging then
					linkDragging = false
					local foundTarget = false

					for _, otherPicker in pairs(Page:GetChildren()) do
						if otherPicker:IsA("Frame") and otherPicker:FindFirstChild("isLinkable") and otherPicker.isLinkable.Value then
							if isMouseOver(otherPicker) and otherPicker ~= draggedColorPicker then
								otherPicker.HueSat.Value = draggedColorPicker.HueSat.Value
								updatestuff() 
								foundTarget = true
								syde:Toast({
									Content = 'Color Linked',
									Duration = 2,
								})
								TweenService:Create(
									colorpicker.HueValues.Link.Frame,
									TweenInfo.new(0.3, Enum.EasingStyle.Quint),
									{ Position = originalPosition }
								):Play()

								TweenService:Create(otherPicker.UIStroke, TweenInfo.new(0.6, Enum.EasingStyle.Exponential), {Transparency = 1}):Play()
								--	TweenService:Create(colorpicker.HueValues.HEX.Link, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {ImageColor3 = Color3.fromRGB(66, 66, 66)}):Play()
								TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {Size = UDim2.new(1, 0,1, 0)}):Play()
								break
							end
						end
					end

					if not foundTarget then
						--	TweenService:Create(colorpicker.HueValues.HEX.Link, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {ImageColor3 = Color3.fromRGB(66, 66, 66)}):Play()
						TweenService:Create(colorpicker.HueValues.Link.Frame, TweenInfo.new(0.5, Enum.EasingStyle.Exponential) , {Size = UDim2.new(1, 0,1, 0)}):Play()
						TweenService:Create(
							colorpicker.HueValues.Link.Frame,
							TweenInfo.new(0.3, Enum.EasingStyle.Quint),
							{ Position = originalPosition }
						):Play()
					end
				end
			end) 

			local function updateColorPicker()
				local Hue, Saturation, Value = HueSat.Value:ToHSV()

				if Saturation > 0.02 then
					HSV[1] = Hue
				end
				HSV[2] = Saturation
				HSV[3] = Value

				updatestuff()
			end

			HueSat.Changed:Connect(updateColorPicker)

			local hueIncrement = 0.005 

			local function RainbowEffect()
				HueValue = (HueValue + hueIncrement) % 1
				HSV[1] = HueValue

				updatestuff()
			end

			local isRainbowEnabled = false
			local huerender = nil

			local function ToggleRainbowEffect()
				isRainbowEnabled = not isRainbowEnabled
				if isRainbowEnabled then
					if not huerender then
						huerender = runservice.RenderStepped:Connect(RainbowEffect)
						tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential ), {ImageColor3 = Color3.fromRGB(255, 255, 255)}):Play()
					end
				else
					if huerender then
						huerender:Disconnect()
						tweenservice:Create(colorpicker.color.Values.Rainbow, TweenInfo.new(0.5, Enum.EasingStyle.Exponential ), {ImageColor3 = Color3.fromRGB(62, 62, 62)}):Play()
						huerender = nil
					end
				end
			end

			colorpicker.color.Values.Rainbow.MouseButton1Click:Connect(ToggleRainbowEffect)

			function data:Set(RGBColor, skipSave)
				if typeof(RGBColor) ~= "Color3" then return end

				data.Color = RGBColor
				local h, s, v = RGBColor:ToHSV()
				HSV[1], HSV[2], HSV[3] = h, s, v

				updatestuff()

				if not skipSave then
					SaveConfig()
				end
			end

			if syde.ConfigEnabled then
				if data.Flag then
					syde.Flags[data.Flag] = data
				end
			end



			return data

		end

		function syde:LoadSaveConfig()
			local notified = false
			local loaded = false

			if syde.ConfigEnabled then
				syde:Toast({
					Content = 'Loading Save File Please Do Not Close';
					Duration = 3
				})
				task.wait(1)
				local success, result = pcall(function()
					local filePath = string.format("%s/%s.json", syde.ConfigFolder, syde.ConfigFile)
					if isfile and isfile(filePath) then
						loaded = LoadConfig(readfile(filePath))
					end
				end)

				if success then
					syde:Toast({
						Content = 'Loaded Save File';
						Duration = 3
					})
					print("Configuration loaded successfully from a previous session.")
				elseif not success then
					warn("[SYDE] Configurations Error " .. tostring(result))
				end
			end
		end

		return initelement


	end
	return tbdata


end

return syde
